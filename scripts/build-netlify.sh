#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${SITES_ENV_READY:-}" != "1" ]]; then
  exec "${script_dir}/sites-env.sh" -- "$0" "$@"
fi

# Always emit the Netlify preset for this script. A leftover local
# NITRO_PRESET=node (from npm start) must not poison npm run build / test.
# On Netlify CI, Nitro also auto-detects; forcing netlify is still correct.
export NITRO_PRESET=netlify

echo "Building with Nitro preset: ${NITRO_PRESET}"
npx vite build

if [[ ! -d "${SITES_PROJECT_ROOT}/dist" ]]; then
  echo "Expected Netlify publish directory dist/ was not produced." >&2
  exit 66
fi

if [[ ! -f "${SITES_PROJECT_ROOT}/.netlify/functions-internal/server/main.mjs" ]]; then
  echo "Expected Nitro Netlify function .netlify/functions-internal/server/main.mjs was not produced." >&2
  exit 66
fi

echo "Netlify build output ready in dist/"
