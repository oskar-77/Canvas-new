import http from "node:http";
import { Router } from "express";
import type { Request, Response } from "express";

const router = Router();

const CANVAS_VITE_PORT = 23965;

/**
 * In development the shared reverse proxy routes all /api/* requests to this
 * api-server (port 8080) before they reach canvas-anvil's Vite plugin, which
 * is where the actual route implementations live.  This catch-all proxy
 * forwards every unmatched /api/* request to the canvas-anvil Vite dev server
 * so all routes (config, chat, ppt-ai, …) work correctly.
 *
 * In production canvas-anvil is served as static files, so the routes must be
 * implemented here directly (or in a shared lib).  This proxy is intentionally
 * disabled in production.
 */
if (process.env.NODE_ENV !== "production") {
  router.use((req: Request, res: Response) => {
    const bodyStr =
      req.body !== undefined && req.method !== "GET" && req.method !== "HEAD"
        ? JSON.stringify(req.body)
        : undefined;

    const headers: Record<string, string | string[]> = {};
    for (const [k, v] of Object.entries(req.headers)) {
      if (
        v === undefined ||
        ["host", "connection", "transfer-encoding"].includes(k.toLowerCase())
      ) {
        continue;
      }
      headers[k] = v as string | string[];
    }
    if (bodyStr !== undefined) {
      headers["content-type"] = "application/json";
      headers["content-length"] = String(Buffer.byteLength(bodyStr));
    }

    const options: http.RequestOptions = {
      hostname: "localhost",
      port: CANVAS_VITE_PORT,
      path: req.originalUrl,
      method: req.method,
      headers,
    };

    const proxyReq = http.request(options, (proxyRes) => {
      res.statusCode = proxyRes.statusCode ?? 502;

      for (const [k, v] of Object.entries(proxyRes.headers)) {
        if (
          v !== undefined &&
          !["connection", "transfer-encoding"].includes(k.toLowerCase())
        ) {
          res.setHeader(k, v as string | string[]);
        }
      }

      proxyRes.pipe(res, { end: true });
    });

    proxyReq.on("error", (err) => {
      if (!res.headersSent) {
        res.status(502).json({
          error: "canvas-proxy: could not reach canvas-anvil Vite server",
          detail: err.message,
        });
      }
    });

    if (bodyStr !== undefined) {
      proxyReq.write(bodyStr);
    }
    proxyReq.end();
  });
}

export default router;
