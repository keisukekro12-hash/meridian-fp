import { NextRequest, NextResponse } from "next/server";

// 牛牛 配当計算 (public/niuniu/index.html) の共有戦績。
// 卓ごとに Upstash Redis（Vercel の Storage から追加）へ保存する:
//   nn:<卓ID>:hands    hash  手ID   -> JSON
//   nn:<卓ID>:players  hash  メンバーID -> JSON
//   nn:<卓ID>:rev      int   書き込みのたびに +1（ポーリングの差分判定用）

export const dynamic = "force-dynamic";

const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

const TABLE_RE = /^[a-z0-9]{6,32}$/;
const HAND_ID_RE = /^h[0-9a-z]{1,40}$/;
const PLAYER_ID_RE = /^p[0-9a-z]{0,24}$/;
const MAX_IMPORT = 5000;

type Cmd = (string | number)[];

async function redis(cmds: Cmd[]): Promise<unknown[]> {
  const res = await fetch(`${REDIS_URL}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${REDIS_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(cmds),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`redis ${res.status}`);
  const out = (await res.json()) as { result?: unknown; error?: string }[];
  return out.map((o) => {
    if (o.error) throw new Error(o.error);
    return o.result;
  });
}

const keys = (t: string) => ({ hands: `nn:${t}:hands`, players: `nn:${t}:players`, rev: `nn:${t}:rev` });

function hashToObject(flat: unknown): Record<string, unknown> {
  const obj: Record<string, unknown> = {};
  if (!Array.isArray(flat)) return obj;
  for (let i = 0; i + 1 < flat.length; i += 2) {
    try {
      obj[String(flat[i])] = JSON.parse(String(flat[i + 1]));
    } catch {
      /* skip a broken entry */
    }
  }
  return obj;
}

const int = (v: unknown, min: number, max: number) =>
  typeof v === "number" && Number.isFinite(v) ? Math.min(max, Math.max(min, Math.round(v))) : null;

function cleanHand(h: unknown) {
  if (!h || typeof h !== "object") return null;
  const x = h as Record<string, unknown>;
  const b = (x.b ?? {}) as Record<string, unknown>;
  const t = int(x.t, 0, 4102444800000);
  const p = int(x.p, 1, 99);
  if (typeof x.id !== "string" || !HAND_ID_RE.test(x.id) || t === null || p === null) return null;
  if (x.o !== "w" && x.o !== "l") return null;
  const pl = typeof x.pl === "string" && PLAYER_ID_RE.test(x.pl) ? x.pl : "p1";
  return {
    id: x.id, t, pl, o: x.o, p,
    b: { top: int(b.top, 0, 1e6) ?? 0, mid: int(b.mid, 0, 1e6) ?? 0, bot: int(b.bot, 0, 1e6) ?? 0 },
    g: int(x.g, 0, 1e8) ?? 0, r: int(x.r, 0, 1e8) ?? 0, d: int(x.d, -1e8, 1e8) ?? 0,
  };
}

function cleanPlayer(p: unknown) {
  if (!p || typeof p !== "object") return null;
  const x = p as Record<string, unknown>;
  if (typeof x.id !== "string" || !PLAYER_ID_RE.test(x.id)) return null;
  const name = typeof x.name === "string" ? x.name.trim().slice(0, 24) : "";
  const c = int(x.c, 0, 5);
  if (!name || c === null) return null;
  return { id: x.id, name, c };
}

const bad = (error: string, status = 400) => NextResponse.json({ error }, { status });

function guard(table: string) {
  if (!REDIS_URL || !REDIS_TOKEN) return bad("storage_not_configured", 503);
  if (!TABLE_RE.test(table)) return bad("bad_table");
  return null;
}

export async function GET(req: NextRequest, { params }: { params: { table: string } }) {
  const g = guard(params.table);
  if (g) return g;
  const k = keys(params.table);
  const since = Number(req.nextUrl.searchParams.get("since") ?? -1);
  try {
    const [rev] = await redis([["GET", k.rev]]);
    const current = Number(rev ?? 0);
    if (current === since) return NextResponse.json({ same: true, rev: current });
    const [hands, players, rev2] = await redis([["HGETALL", k.hands], ["HGETALL", k.players], ["GET", k.rev]]);
    return NextResponse.json({ rev: Number(rev2 ?? 0), hands: hashToObject(hands), players: hashToObject(players) });
  } catch {
    return bad("storage_error", 502);
  }
}

export async function POST(req: NextRequest, { params }: { params: { table: string } }) {
  const g = guard(params.table);
  if (g) return g;
  const k = keys(params.table);
  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) return bad("bad_body");

  const cmds: Cmd[] = [];
  switch (body.op) {
    case "putHand": {
      const h = cleanHand(body.hand);
      if (!h) return bad("bad_hand");
      cmds.push(["HSET", k.hands, h.id, JSON.stringify(h)]);
      break;
    }
    case "delHand": {
      if (typeof body.id !== "string" || !HAND_ID_RE.test(body.id)) return bad("bad_id");
      cmds.push(["HDEL", k.hands, body.id]);
      break;
    }
    case "putPlayer": {
      const p = cleanPlayer(body.player);
      if (!p) return bad("bad_player");
      cmds.push(["HSET", k.players, p.id, JSON.stringify(p)]);
      break;
    }
    case "delPlayer": {
      if (typeof body.id !== "string" || !PLAYER_ID_RE.test(body.id)) return bad("bad_id");
      cmds.push(["HDEL", k.players, body.id]);
      break;
    }
    case "import": {
      const hands = (Array.isArray(body.hands) ? body.hands : []).slice(0, MAX_IMPORT).map(cleanHand).filter(Boolean);
      const players = (Array.isArray(body.players) ? body.players : []).slice(0, 6).map(cleanPlayer).filter(Boolean);
      if (hands.length) cmds.push(["HSET", k.hands, ...hands.flatMap((h) => [h!.id, JSON.stringify(h)])]);
      if (players.length) cmds.push(["HSET", k.players, ...players.flatMap((p) => [p!.id, JSON.stringify(p)])]);
      if (!cmds.length) return bad("nothing_to_import");
      break;
    }
    default:
      return bad("bad_op");
  }
  cmds.push(["INCR", k.rev]);
  try {
    const out = await redis(cmds);
    return NextResponse.json({ ok: true, rev: Number(out[out.length - 1]) });
  } catch {
    return bad("storage_error", 502);
  }
}
