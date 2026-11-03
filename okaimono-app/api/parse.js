import { parseShoppingText } from "../lib/shopping.js";
import { isAuthorized, json, readJson } from "../lib/http.js";

export async function POST(request) {
  if (!isAuthorized(request)) return json({ error: "unauthorized" }, 401);
  const body = await readJson(request);
  try {
    return json(await parseShoppingText(body?.text));
  } catch (err) {
    console.error(err);
    return json({ error: "parse_failed" }, 502);
  }
}
