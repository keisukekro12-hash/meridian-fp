// LINE Messaging API で家族に送る
import { createHmac, timingSafeEqual } from "node:crypto";

const API = "https://api.line.me/v2/bot/message";

async function callLine(path, body) {
  const res = await fetch(`${API}/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error(`LINE API ${path} failed: ${res.status} ${await res.text()}`);
  }
}

/**
 * 家族に送る。LINE_GROUP_ID があればそのグループへ、なければ友だち全員へ一斉送信。
 * トークンが未設定なら送らずに内容を返す（開発用ドライラン）。
 */
export async function sendToFamily(text) {
  if (!process.env.LINE_CHANNEL_ACCESS_TOKEN) {
    console.log("[dry-run] LINE未設定のため送信しません:\n" + text);
    return { mode: "dry-run" };
  }
  const messages = [{ type: "text", text: text.slice(0, 5000) }];
  if (process.env.LINE_GROUP_ID) {
    await callLine("push", { to: process.env.LINE_GROUP_ID, messages });
    return { mode: "group" };
  }
  await callLine("broadcast", { messages });
  return { mode: "broadcast" };
}

export function verifyLineSignature(rawBody, signature, secret = process.env.LINE_CHANNEL_SECRET) {
  if (!secret || !signature) return false;
  const expected = createHmac("sha256", secret).update(rawBody).digest();
  const given = Buffer.from(signature, "base64");
  return given.length === expected.length && timingSafeEqual(given, expected);
}

export async function replyText(replyToken, text) {
  await callLine("reply", { replyToken, messages: [{ type: "text", text }] });
}
