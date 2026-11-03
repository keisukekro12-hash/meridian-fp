// 話した言葉 → 買い物リストに整理する
import Anthropic from "@anthropic-ai/sdk";
import * as z from "zod/v4";
import { betaZodOutputFormat } from "@anthropic-ai/sdk/helpers/beta/zod";

export const MAX_INPUT_CHARS = 500;

const ItemSchema = z.object({
  name: z.string().describe("商品名。ネットで検索しやすい一般的な名前（例: 牛乳、食パン、トイレットペーパー）"),
  quantity: z.string().describe("数量と単位（例: 1本、2袋、1パック）。言われていなければ「1つ」"),
  note: z.string().describe("銘柄・サイズ・こだわりなど補足。なければ空文字"),
});

const ResultSchema = z.object({
  items: z.array(ItemSchema),
  confirmation: z
    .string()
    .describe("読み上げ用の確認文。やさしい短い日本語で、全商品と数量を言い、最後に「家族に送ってよいですか？」で終える。商品がなければ、もう一度言ってほしいとやさしく伝える"),
});

const SYSTEM = `あなたは、ネットに不慣れな高齢の方の「おつかい」を手伝う係です。
高齢の方がスマホに話した言葉（音声認識の結果なので、誤変換や言いよどみ、世間話が混ざります）から、買ってほしい物だけを取り出して買い物リストにします。

ルール:
- 買い物と関係ない話（天気、あいさつ、独り言）は無視する。
- 音声認識の誤変換は、文脈から明らかな場合だけ直す（例:「ぎゅうにゅう2本」→ 牛乳 2本）。
- 「いつもの」「あれ」など曖昧なものは推測で決めつけず、name は分かる範囲の一般名、note に本人の言葉をそのまま残す。
- 同じ物が2回出たら1つにまとめる。
- 薬・お酒・たばこも、言われたとおりリストに入れてよい（判断は家族がする）。
- 確認文は、耳が遠い方にも伝わるよう、ゆっくり読める短い文にする。`;

/** 開発用: Claude を呼ばずに「、」や「と」で区切るだけの簡易版 */
function mockParse(text) {
  const names = text
    .split(/[、,，。\s]|と(?=[^\s])/)
    .map((s) => s.replace(/(を|が)?(買って|ほしい|欲しい|ください|お願い).*$/, "").trim())
    .filter(Boolean);
  const items = names.map((name) => ({ name, quantity: "1つ", note: "" }));
  const confirmation = items.length
    ? `${items.map((i) => `${i.name}を${i.quantity}`).join("、")}ですね。家族に送ってよいですか？`
    : "うまく聞き取れませんでした。もう一度、ゆっくり言ってください。";
  return { items, confirmation };
}

let client;

export async function parseShoppingText(text) {
  const input = String(text ?? "").trim().slice(0, MAX_INPUT_CHARS);
  if (!input) {
    return { items: [], confirmation: "うまく聞き取れませんでした。もう一度、ゆっくり言ってください。" };
  }
  if (process.env.MOCK_AI === "1") return mockParse(input);

  client ??= new Anthropic();
  const response = await client.beta.messages.parse({
    model: "claude-opus-5-5",
    max_tokens: 4000,
    // 単純な抽出なので effort は low で十分（速さ優先）
    output_config: { effort: "low", format: betaZodOutputFormat(ResultSchema) },
    // 安全フィルタで断られた場合に別モデルで自動再実行する
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    system: SYSTEM,
    messages: [{ role: "user", content: `話した言葉:\n${input}` }],
  });

  if (response.stop_reason === "refusal" || !response.parsed_output) {
    return { items: [], confirmation: "ごめんなさい、うまく聞き取れませんでした。もう一度言ってください。" };
  }
  return response.parsed_output;
}

/** クライアントから送られてきたリストを検証・整形する（LINE送信前） */
export function sanitizeItems(raw) {
  if (!Array.isArray(raw)) return [];
  return raw
    .slice(0, 30)
    .map((i) => ({
      name: String(i?.name ?? "").trim().slice(0, 60),
      quantity: String(i?.quantity ?? "").trim().slice(0, 20) || "1つ",
      note: String(i?.note ?? "").trim().slice(0, 100),
    }))
    .filter((i) => i.name);
}

export function amazonSearchUrl(name) {
  return `https://www.amazon.co.jp/s?k=${encodeURIComponent(name)}`;
}

export function buildFamilyMessage(items, { sender = "おじいちゃん", now = new Date(), inGroup = false } = {}) {
  const time = now.toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  const lines = [`🛒 ${sender}からのおつかい（${time}）`, ""];
  items.forEach((item, idx) => {
    lines.push(`${idx + 1}. ${item.name}　${item.quantity}`);
    if (item.note) lines.push(`　※${item.note}`);
    lines.push(`　${amazonSearchUrl(item.name)}`);
  });
  lines.push(
    "",
    inGroup
      ? "注文した人は、このグループに「注文したよ」と返信してください（二重注文防止）"
      : "注文した人は、家族のグループLINEで「注文したよ」と伝えてください（二重注文防止）",
  );
  return lines.join("\n");
}
