import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

async function exists(relativePath) {
  try {
    await access(path.join(root, relativePath), constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

test("produces Netlify publish directory and Nitro server function", async () => {
  assert.equal(await exists("dist"), true, "expected dist/ publish directory");
  assert.equal(
    await exists(".netlify/functions-internal/server/main.mjs"),
    true,
    "expected Nitro Netlify server function",
  );
  assert.equal(
    await exists(".netlify/functions-internal/nitro.json"),
    true,
    "expected nitro.json metadata",
  );

  const nitro = JSON.parse(
    await readFile(
      path.join(root, ".netlify/functions-internal/nitro.json"),
      "utf8",
    ),
  );
  assert.equal(nitro.preset, "netlify");
});

test("ships Melive static assets in dist/", async () => {
  assert.equal(await exists("dist/melive-logo.png"), true);
  assert.equal(await exists("dist/favicon.svg"), true);
});

test("rendered page copy targets Vinta Software", async () => {
  const { readFile } = await import("node:fs/promises");
  const page = await readFile(path.join(root, "app/page.tsx"), "utf8");
  assert.match(page, /Vinta Software/);
  assert.match(page, /Healthcare Product Readiness Review/);
  assert.doesNotMatch(page, /Café Jaguari/);
});
