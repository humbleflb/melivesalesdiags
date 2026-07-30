# AGENTS.md

## Cursor Cloud specific instructions

This is a single-app vinext (Next.js-on-Vite) diagnostic landing page for Café Jaguari / Melive. No Docker, database server, or compose stack is required for local development.

### Commands

See `README.md` / `package.json` for the standard scripts. In practice:

- **Dev:** `npm run dev` → Vite/Vinext on `http://localhost:5173/` (binds `0.0.0.0`)
- **Lint:** `npm run lint` (may report existing `@next/next/no-img-element` warnings in `app/page.tsx`)
- **Test:** `npm test` runs a bounded `vinext build` then `tests/rendered-html.test.mjs`
- **Build-only:** `npm run build`

### Gotchas

- `vite.config.ts` requires `.openai/hosting.json` and `build/sites-vite-plugin.ts`. If either is missing, Vite fails before the server starts.
- `scripts/*.sh` must be executable (`chmod +x scripts/*.sh`). `npm run build` / `lint` / `test` call them directly.
- D1/R2 are optional and currently unset in `.openai/hosting.json`. Local Miniflare bindings are only created when those fields are non-null.
- `.sites-runtime/` and `.wrangler/` are disposable local state (gitignored). `.vinext/fonts/` may appear after first build/dev — treat as generated.
- Do not use `npm run install:ci` for day-to-day local work; prefer `npm install`. `install:ci` is the Sites CI lockfile helper (flock/timeout/prefer-offline).
