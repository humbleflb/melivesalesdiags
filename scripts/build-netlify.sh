#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${SITES_ENV_READY:-}" != "1" ]]; then
  exec "${script_dir}/sites-env.sh" -- "$0" "$@"
fi

# Netlify CI sets NETLIFY=true and Nitro auto-selects the netlify preset.
# Local / other CI can force the preset explicitly.
if [[ -z "${NITRO_PRESET:-}" && -z "${NETLIFY:-}" ]]; then
  export NITRO_PRESET=netlify
fi

echo "Building with Nitro preset: ${NITRO_PRESET:-auto (Netlify CI)}"
npx vite build

if [[ ! -d "${SITES_PROJECT_ROOT}/dist" ]]; then
  echo "Expected Netlify publish directory dist/ was not produced." >&2
  exit 66
fi

echo "Netlify build output ready in dist/"
