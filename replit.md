# CanvasAnvil

منصة ذكاء اصطناعي متعددة الـ Canvas لإنشاء مخططات التدفق، تصميم الديكور، عروض PPT، الملصقات، الإنفوغراف، وتقديم المنتجات.

## Run & Operate

- `pnpm --filter @workspace/canvas-anvil run dev` — run the CanvasAnvil frontend (port assigned by Replit)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.8
- Frontend: React 18 + Vite 6 + Tailwind CSS v3
- State management: Zustand
- AI SDK: Vercel AI SDK v5 (`ai` package)
- Supported AI providers: OpenAI, Anthropic, Google Gemini, DeepSeek, Ollama, and more (configurable in UI settings)
- Build: esbuild

## Where things live

- `artifacts/canvas-anvil/` — Main CanvasAnvil React+Vite app
- `artifacts/canvas-anvil/src/` — React source code (6 workspaces: flow, cad, ppt, poster, infographic, product)
- `artifacts/canvas-anvil/api/` — Express API routes (chat, config, file-parser, etc.)
- `artifacts/canvas-anvil/agent/` — AI system prompt `.md` files for each workspace
- `artifacts/canvas-anvil/skill/` — Agent skill definitions
- `artifacts/canvas-anvil/public/` — Static assets, examples, icons
- `artifacts/api-server/` — Shared backend Express server

## Architecture decisions

- CanvasAnvil uses in-memory state navigation (not URL-based routing) — clicking nav items switches workspaces without URL changes
- Vite dev server handles API routes via a local plugin middleware (`createLocalApiPlugin`) — no separate API server needed in dev mode
- AI provider/key is configured by the user in the Settings dialog (gear icon) — no hardcoded API keys required to run
- Dynamic imports (`/* @vite-ignore */`) are used in vite.config.ts for API route imports to avoid Vite bundling server-side deps at config load time
- Tailwind CSS v3 (NOT v4) — uses `tailwind.config.js` + PostCSS, not `@tailwindcss/vite`

## Product

CanvasAnvil supports 6 AI canvas types:
- **流程画布 (Flow)** — AI-powered flow diagrams and mind maps
- **室内设计画布 (CAD/Interior)** — Interior design layout and planning
- **PPT画布** — AI presentation slide generation
- **海报画布 (Poster)** — Poster and graphic design creation
- **信息图画布 (Infographic)** — Data visualization and infographic generation
- **产品介绍画布 (Product)** — Product storytelling and presentation

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- `jszip` must be a direct dependency (not just transitive via pptxgenjs) due to pnpm strict hoisting
- The `agent/` and `skill/` directories must exist at `artifacts/canvas-anvil/agent/` and `artifacts/canvas-anvil/skill/` — these are imported as raw `.md` files by the frontend
- AI features require configuring a provider API key in the Settings dialog (click the gear icon in the top right)
- The app uses Tailwind v3, NOT v4 — do not use `@tailwindcss/vite` or `@import "tailwindcss"` syntax

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- Original repo: https://github.com/CodingFeng101/CanvasAnvil
