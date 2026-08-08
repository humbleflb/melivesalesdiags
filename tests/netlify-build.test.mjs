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

test("rendered page copy targets Zetti", async () => {
  const { readFile } = await import("node:fs/promises");
  const page = await readFile(path.join(root, "app/page.tsx"), "utf8");
  assert.match(page, /Zetti/);
  assert.match(page, /Vetor Farma/);
  assert.doesNotMatch(page, /Vinta Software/);
  assert.doesNotMatch(page, /Café Jaguari/);
});

test("ships commercial proposal route for Melive + Zetti", async () => {
  const { readFile } = await import("node:fs/promises");
  const proposal = await readFile(
    path.join(root, "app/proposta/page.tsx"),
    "utf8",
  );
  assert.match(proposal, /Proposta comercial/);
  assert.match(proposal, /R\$\s*7\.800/);
  assert.match(proposal, /Landing Page Estratégica/);
  assert.match(proposal, /Melive/);
  assert.match(proposal, /Zetti/);
});
