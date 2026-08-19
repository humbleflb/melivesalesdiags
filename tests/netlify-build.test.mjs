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
  assert.equal(await exists("dist/melive-mark.png"), true);
  assert.equal(await exists("dist/favicon.svg"), true);
});

test("hub lists allocated client proposals", async () => {
  const hub = await readFile(path.join(root, "app/page.tsx"), "utf8");
  const catalog = await readFile(path.join(root, "app/clients.ts"), "utf8");
  assert.match(hub, /Biblioteca de propostas|clientes/i);
  assert.match(catalog, /slug: "zetti"/);
  assert.match(catalog, /slug: "trinio"/);
  assert.match(catalog, /slug: "recursim"/);
  assert.match(catalog, /href: "\/zetti"/);
  assert.match(catalog, /href: "\/trinio"/);
  assert.match(catalog, /href: "\/recursim"/);
  assert.match(catalog, /proposalHref: "\/zetti\/proposta"/);
  assert.match(catalog, /proposalHref: "\/trinio\/proposta"/);
});

test("Zetti diagnosis lives at /zetti", async () => {
  const page = await readFile(path.join(root, "app/zetti/page.tsx"), "utf8");
  assert.match(page, /Zetti/);
  assert.match(page, /Vetor Farma/);
  assert.match(page, /\/zetti\/proposta/);
  assert.doesNotMatch(page, /TrinioOS/);
});

test("Trinio diagnosis lives at /trinio", async () => {
  const page = await readFile(path.join(root, "app/trinio/page.tsx"), "utf8");
  assert.match(page, /Trinio/);
  assert.match(page, /TrinioOS/);
  assert.match(page, /Checkout/);
  assert.doesNotMatch(page, /Vetor Farma/);
});

test("Trinio proposal lives at /trinio/proposta with slide nav", async () => {
  const page = await readFile(
    path.join(root, "app/trinio/proposta/page.tsx"),
    "utf8",
  );
  assert.match(page, /Trinio Checkout/);
  assert.match(page, /9\.800/);
  assert.match(page, /data-slide/);
  assert.match(page, /SlideKeyboardNav/);
  assert.match(page, /hipótese|jornada específica/i);
  assert.equal(
    (page.match(/data-slide/g) ?? []).length,
    19,
    "expected 19 slide anchors on /trinio/proposta",
  );
});

test("ships commercial proposal route for Melive + Zetti", async () => {
  const proposal = await readFile(
    path.join(root, "app/zetti/proposta/page.tsx"),
    "utf8",
  );
  const content = await readFile(
    path.join(root, "app/zetti/proposta/content.ts"),
    "utf8",
  );
  const builder = await readFile(
    path.join(root, "app/zetti/proposta/build-pptx.ts"),
    "utf8",
  );
  assert.match(proposal, /proposalSlides/);
  assert.match(proposal, /DownloadPptxButton/);
  assert.match(content, /Proposta comercial/);
  assert.match(content, /7\.800/);
  assert.match(content, /Landing Page Estratégica/);
  assert.match(builder, /pptxgenjs/);
  assert.match(builder, /createProposalPptx/);
  assert.equal(
    (content.match(/layout:/g) ?? []).length >= 14,
    true,
    "expected at least 14 typed slides in content.ts",
  );
});

test("RecurSIM proposal lives at /recursim with slide keyboard nav", async () => {
  const page = await readFile(path.join(root, "app/recursim/page.tsx"), "utf8");
  const nav = await readFile(
    path.join(root, "app/components/SlideKeyboardNav.tsx"),
    "utf8",
  );
  assert.match(page, /RecurSIM/);
  assert.match(page, /8\.400/);
  assert.match(page, /custo por recurso pago/i);
  assert.match(page, /data-slide/);
  assert.match(page, /SlideKeyboardNav/);
  assert.equal(
    (page.match(/data-slide/g) ?? []).length,
    19,
    "expected 19 slide anchors on /recursim",
  );
  assert.match(nav, /PageDown/);
  assert.match(nav, /scrollIntoView/);
  assert.match(nav, /event\.preventDefault/);
});
