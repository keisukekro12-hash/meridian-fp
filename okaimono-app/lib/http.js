export function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

/** 合言葉チェック。APP_PASSCODE 未設定なら誰でも使える（開発用） */
export function isAuthorized(request) {
  const pass = process.env.APP_PASSCODE;
  return !pass || request.headers.get("x-app-key") === pass;
}

export async function readJson(request) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}
