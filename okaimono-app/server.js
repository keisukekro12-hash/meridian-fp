// ローカル確認用サーバー（本番は Vercel が api/ と public/ をそのまま配信する）
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const PORT = Number(process.env.PORT) || 3000;
const PUBLIC = join(import.meta.dirname, "public");
const TYPES = { ".html": "text/html; charset=utf-8", ".json": "application/json", ".svg": "image/svg+xml", ".webmanifest": "application/manifest+json" };
const ROUTES = { "/api/parse": "./api/parse.js", "/api/send": "./api/send.js", "/api/line-webhook": "./api/line-webhook.js" };

createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  try {
    if (ROUTES[url.pathname]) {
      if (req.method !== "POST") return res.writeHead(405).end();
      const chunks = [];
      for await (const c of req) chunks.push(c);
      const request = new Request(url, { method: "POST", headers: req.headers, body: Buffer.concat(chunks) });
      const { POST } = await import(ROUTES[url.pathname]);
      const response = await POST(request);
      res.writeHead(response.status, Object.fromEntries(response.headers));
      return res.end(Buffer.from(await response.arrayBuffer()));
    }
    const path = normalize(url.pathname === "/" ? "/index.html" : url.pathname);
    const body = await readFile(join(PUBLIC, path));
    res.writeHead(200, { "Content-Type": TYPES[extname(path)] ?? "application/octet-stream" }).end(body);
  } catch (err) {
    if (err.code !== "ENOENT") console.error(err);
    if (!res.headersSent) res.writeHead(err.code === "ENOENT" ? 404 : 500);
    res.end();
  }
}).listen(PORT, () => console.log(`http://localhost:${PORT}`));
