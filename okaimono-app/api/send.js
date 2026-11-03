import { buildFamilyMessage, sanitizeItems } from "../lib/shopping.js";
import { sendToFamily } from "../lib/line.js";
import { isAuthorized, json, readJson } from "../lib/http.js";

export async function POST(request) {
  if (!isAuthorized(request)) return json({ error: "unauthorized" }, 401);
  const body = await readJson(request);
  const items = sanitizeItems(body?.items);
  if (items.length === 0) return json({ error: "empty" }, 400);

  const text = buildFamilyMessage(items, {
    sender: process.env.SENDER_NAME || "おじいちゃん",
    inGroup: Boolean(process.env.LINE_GROUP_ID),
  });
  try {
    const result = await sendToFamily(text);
    return json({ ok: true, ...result });
  } catch (err) {
    console.error(err);
    return json({ error: "send_failed" }, 502);
  }
}
