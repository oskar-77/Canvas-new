import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import type { IncomingMessage, ServerResponse } from "node:http";
import type { Connect, Plugin } from "vite";

type RouteHandler = (request: Request) => Promise<Response>;

async function toWebRequest(req: IncomingMessage): Promise<Request> {
  const origin = `http://${req.headers.host || "localhost"}`;
  const url = new URL(req.url || "/", origin);
  const headers = new Headers();

  for (const [key, value] of Object.entries(req.headers)) {
    if (Array.isArray(value)) {
      for (const item of value) headers.append(key, item);
    } else if (typeof value === "string") {
      headers.set(key, value);
    }
  }

  const method = (req.method || "GET").toUpperCase();
  if (method === "GET" || method === "HEAD") {
    return new Request(url.toString(), { method, headers });
  }

  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  const bodyBuffer = chunks.length > 0 ? Buffer.concat(chunks) : undefined;

  return new Request(url.toString(), {
    method,
    headers,
    body: bodyBuffer as BodyInit | null | undefined,
  });
}

async function sendWebResponse(webResponse: Response, res: ServerResponse) {
  res.statusCode = webResponse.status;
  webResponse.headers.forEach((value, key) => {
    if (key.toLowerCase() === "transfer-encoding") return;
    res.setHeader(key, value);
  });

  if (!webResponse.body) {
    res.end();
    return;
  }

  const reader = webResponse.body.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value) res.write(Buffer.from(value));
  }
  res.end();
}

function createLocalApiPlugin(): Plugin {
  let routes: Record<string, RouteHandler> | null = null;

  async function getRoutes(): Promise<Record<string, RouteHandler>> {
    if (routes) return routes;
    const [
      { GET: getConfig },
      { POST: postVerifyAccessCode },
      { POST: postLogFeedback },
      { POST: postLogSave },
      { POST: postLogFileParser },
      { POST: postThirdPartyParser },
      { POST: postChat },
      { POST: postPptAi },
    ] = await Promise.all([
      import(/* @vite-ignore */ "./api/routes/config"),
      import(/* @vite-ignore */ "./api/routes/verify-access-code"),
      import(/* @vite-ignore */ "./api/routes/log-feedback"),
      import(/* @vite-ignore */ "./api/routes/log-save"),
      import(/* @vite-ignore */ "./api/routes/log-file-parser"),
      import(/* @vite-ignore */ "./api/routes/third-party-parser"),
      import(/* @vite-ignore */ "./api/routes/chat"),
      import(/* @vite-ignore */ "./api/routes/ppt-ai"),
    ]);
    routes = {
      "GET /api/config": async () => getConfig(),
      "POST /api/verify-access-code": postVerifyAccessCode,
      "POST /api/log-feedback": postLogFeedback,
      "POST /api/log-save": postLogSave,
      "POST /api/log-file-parser": postLogFileParser,
      "POST /api/third-party-parser": postThirdPartyParser,
      "POST /api/chat": postChat,
      "POST /api/ppt-ai": postPptAi,
    };
    return routes;
  }

  const attachApiMiddleware = (middlewares: Connect.ServerStack) => {
    middlewares.use(async (req, res, next) => {
      const method = (req.method || "GET").toUpperCase();
      const pathname = new URL(req.url || "/", "http://localhost").pathname;
      const routeKey = `${method} ${pathname}`;

      let handler: RouteHandler | undefined;
      try {
        const r = await getRoutes();
        handler = r[routeKey];
      } catch {
        next();
        return;
      }

      if (!handler) {
        next();
        return;
      }

      try {
        const request = await toWebRequest(req);
        const response = await handler(request);
        await sendWebResponse(response, res);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Internal Server Error";
        res.statusCode = 500;
        res.setHeader("content-type", "application/json; charset=utf-8");
        res.end(JSON.stringify({ error: message }));
      }
    });
  };

  return {
    name: "local-api-routes",
    configureServer(server) {
      attachApiMiddleware(server.middlewares);
    },
    configurePreviewServer(server) {
      attachApiMiddleware(server.middlewares);
    },
  };
}

const rawPort = process.env.PORT;
if (!rawPort) {
  throw new Error("PORT environment variable is required but was not provided.");
}
const port = Number(rawPort);
if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH || "/";

export default defineConfig({
  base: basePath,
  plugins: [
    createLocalApiPlugin(),
    react(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      allow: [path.resolve(import.meta.dirname)],
      strict: false,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});
