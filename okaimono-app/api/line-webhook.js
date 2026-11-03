// 家族のLINEグループにボットを招待したとき、グループIDを返信する（初期設定用）
import { replyText, verifyLineSignature } from "../lib/line.js";

export async function POST(request) {
  const raw = await request.text();
  if (!verifyLineSignature(raw, request.headers.get("x-line-signature"))) {
    return new Response("invalid signature", { status: 401 });
  }
  const { events = [] } = JSON.parse(raw);
  for (const ev of events) {
    if (ev.type === "join" && ev.source?.type === "group") {
      await replyText(
        ev.replyToken,
        `おつかいボットです。よろしくお願いします。\n\n設定用のグループID:\n${ev.source.groupId}\n\nこのIDを LINE_GROUP_ID に設定してください。`,
      );
    }
  }
  return new Response("ok");
}
