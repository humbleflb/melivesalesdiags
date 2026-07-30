# AGENTS.md

## Cursor Cloud specific instructions

Single-app vinext (Next.js-on-Vite) diagnostic landing page for **Vinta Software** / Melive (same visual system as prior client diagnoses; copy lives in `app/page.tsx`). **Production target: Netlify** via Nitro. No Docker/DB server required locally.

### Commands

See `package.json` / `README-CURSOR.md`. In practice:

- **Dev:** `npm run dev` → `http://localhost:5173/` (`0.0.0.0`)
- **Lint:** `npm run lint` (existing `@next/next/no-img-element` warnings in `app/page.tsx` are OK)
- **Build (Netlify):** `npm run build` → sets `NITRO_PRESET=netlify` locally; on Netlify CI Nitro auto-detects
- **Local Node prod smoke:** `npm start` rebuilds with `NITRO_PRESET=node` and runs `.output/server/index.mjs` (`vite preview` does not work with the Netlify preset)
- **Test:** `npm test` = Netlify build + `tests/netlify-build.test.mjs`

### Netlify

- Config: `netlify.toml` — build `npm run build`, publish `dist`, Node 22
- Nitro emits serverless functions under `.netlify/functions-internal/` (gitignored; created at build time)
- Do **not** use `@netlify/plugin-nextjs` (UI or toml). This app is vinext/Nitro; that plugin looks for `.next` and fails. `NETLIFY_NEXT_PLUGIN_SKIP=true` is set in `netlify.toml`; also uninstall the plugin in Netlify UI if it was auto-enabled.
- Do **not** use the Cloudflare/`vinext deploy` path for this project

### Gotchas

- `vite.config.ts` uses `@tailwindcss/vite` + `vinext` + `nitro`. Tailwind via PostCSS-only (`@import "tailwindcss"` without the Vite plugin) fails under the Nitro CSS pipeline.
- `scripts/*.sh` must be executable.
- `.sites-runtime/`, `.wrangler/`, `.vinext/`, `.netlify/`, `.output/`, `dist/` are disposable/generated.
- Prefer `npm install` over `npm run install:ci` for day-to-day work.
