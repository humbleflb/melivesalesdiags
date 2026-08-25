# AGENTS.md

## Cursor Cloud specific instructions

Single-app vinext (Next.js-on-Vite) hub of Melive diagnoses and commercial proposals. **Root `/` lists every client.** Each client lives on its own route (`/zetti`, `/trinio`, …) on the **same branch** — do not create a new git branch per client.

### Routes

- `/` — client menu (`app/page.tsx`), catalog in `app/clients.ts`
- `/zetti` — Zetti diagnosis (`app/zetti/page.tsx`)
- `/zetti/proposta` — Zetti commercial proposal (`app/zetti/proposta/`)
- `/trinio` — Trinio diagnosis (`app/trinio/page.tsx`)
- `/trinio/proposta` — Trinio commercial proposal / pilot (`app/trinio/proposta/page.tsx`); deck with slide nav
- `/recursim` — RecurSIM acquisition proposal (`app/recursim/page.tsx`); Page Down/Up jumps between slides
- `/sellentt` — Sellentt digital journey diagnosis (`app/sellentt/page.tsx`)
- `/proposta` — redirect to `/zetti/proposta`

Shared Melive intro: `app/components/MeliveIntro.tsx`. Visual system: `app/globals.css`. **Production target: Netlify** via Nitro.

To add a client: create `app/<slug>/page.tsx`, register it in `app/clients.ts`.

### Commands

See `package.json` / `README-CURSOR.md`. In practice:

- **Dev:** `npm run dev` → `http://localhost:5173/` (`0.0.0.0`)
- **Lint:** `npm run lint` (existing `@next/next/no-img-element` warnings are OK)
- **Build (Netlify):** `npm run build` → sets `NITRO_PRESET=netlify` locally; on Netlify CI Nitro auto-detects
- **Local Node prod smoke:** `npm start` rebuilds with `NITRO_PRESET=node` and runs `.output/server/index.mjs` (`vite preview` does not work with the Netlify preset)
- **Test:** `npm test` = Netlify build + `tests/netlify-build.test.mjs` + PPTX checks

### Netlify

- Config: `netlify.toml` — build `npm run build`, publish `dist`, Node 22
- Nitro emits serverless functions under `.netlify/functions-internal/` (gitignored; created at build time)
- Do **not** use `@netlify/plugin-nextjs` (UI or toml). This app is vinext/Nitro; that plugin looks for `.next` and fails. `NETLIFY_NEXT_PLUGIN_SKIP=true` is set in `netlify.toml`; also uninstall the plugin in Netlify UI if it was auto-enabled.
- Do **not** use the Cloudflare/`vinext deploy` path for this project

### Rules

- **No links in diagnosis/proposal footers.** The footer must never contain links to `/`, other routes, or any external URL. Presentations are often shared as PDF; internal navigation links must not leak to clients. Close the presentation content and end — no link back to the hub.
- **No visible "Page Down" hint badge.** Keyboard navigation exists but must not show a visible tooltip/chip on the page (the progress bar is OK).

### Gotchas

- `vite.config.ts` uses `@tailwindcss/vite` + `vinext` + `nitro`. Tailwind via PostCSS-only (`@import "tailwindcss"` without the Vite plugin) fails under the Nitro CSS pipeline.
- `scripts/*.sh` must be executable.
- `.sites-runtime/`, `.wrangler/`, `.vinext/`, `.netlify/`, `.output/`, `dist/` are disposable/generated.
- Prefer `npm install` over `npm run install:ci` for day-to-day work.
