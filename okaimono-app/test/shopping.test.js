import { test } from "node:test";
import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import { amazonSearchUrl, buildFamilyMessage, parseShoppingText, sanitizeItems } from "../lib/shopping.js";
import { sendToFamily, verifyLineSignature } from "../lib/line.js";

test("sanitizeItems: 不正な値を除き、長さを制限する", () => {
  const out = sanitizeItems([{ name: " 牛乳 ", quantity: "" }, { name: "" }, null, { name: "x".repeat(100), quantity: "2袋", note: 1 }]);
  assert.equal(out.length, 2);
  assert.deepEqual(out[0], { name: "牛乳", quantity: "1つ", note: "" });
  assert.equal(out[1].name.length, 60);
  assert.equal(out[1].note, "1");
  assert.deepEqual(sanitizeItems("not array"), []);
});

test("amazonSearchUrl: 日本語をエンコードする", () => {
  assert.equal(amazonSearchUrl("食パン 6枚"), "https://www.amazon.co.jp/s?k=%E9%A3%9F%E3%83%91%E3%83%B3%206%E6%9E%9A");
});

test("buildFamilyMessage: 送り主・時刻(JST)・商品・リンクを含む", () => {
  const msg = buildFamilyMessage(
    [{ name: "牛乳", quantity: "2本", note: "いつもの低脂肪" }],
    { sender: "じいじ", now: new Date("2026-11-03T05:20:00Z"), inGroup: true },
  );
  assert.match(msg, /じいじからのおつかい（11\/3 14:20）/);
  assert.match(msg, /1\. 牛乳　2本/);
  assert.match(msg, /※いつもの低脂肪/);
  assert.match(msg, /amazon\.co\.jp\/s\?k=/);
  assert.match(msg, /このグループに/);
});

test("parseShoppingText: MOCK_AI で簡易分割、空入力は items なし", async () => {
  process.env.MOCK_AI = "1";
  const r = await parseShoppingText("牛乳と食パンを買って");
  assert.deepEqual(r.items.map((i) => i.name), ["牛乳", "食パン"]);
  assert.equal((await parseShoppingText("   ")).items.length, 0);
});

test("sendToFamily: トークン未設定ならドライラン", async () => {
  delete process.env.LINE_CHANNEL_ACCESS_TOKEN;
  assert.deepEqual(await sendToFamily("test"), { mode: "dry-run" });
});

test("sendToFamily: グループIDがあれば push、なければ broadcast", async () => {
  process.env.LINE_CHANNEL_ACCESS_TOKEN = "tok";
  const calls = [];
  const orig = globalThis.fetch;
  globalThis.fetch = async (url, init) => { calls.push({ url, init }); return new Response("{}", { status: 200 }); };
  try {
    process.env.LINE_GROUP_ID = "Cabc";
    assert.equal((await sendToFamily("hi")).mode, "group");
    assert.match(calls[0].url, /\/push$/);
    assert.equal(JSON.parse(calls[0].init.body).to, "Cabc");
    assert.equal(calls[0].init.headers.Authorization, "Bearer tok");
    delete process.env.LINE_GROUP_ID;
    assert.equal((await sendToFamily("hi")).mode, "broadcast");
    assert.match(calls[1].url, /\/broadcast$/);
  } finally {
    globalThis.fetch = orig;
    delete process.env.LINE_CHANNEL_ACCESS_TOKEN;
  }
});

test("verifyLineSignature: 正しい署名だけ通す", () => {
  const body = '{"events":[]}';
  const sig = createHmac("sha256", "sec").update(body).digest("base64");
  assert.equal(verifyLineSignature(body, sig, "sec"), true);
  assert.equal(verifyLineSignature(body, sig, "other"), false);
  assert.equal(verifyLineSignature(body, undefined, "sec"), false);
});
