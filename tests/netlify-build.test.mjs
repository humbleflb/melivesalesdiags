import assert from "node:assert/strict";
import { createHash } from "node:crypto";
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
  assert.match(catalog, /slug: "sellentt"/);
  assert.match(catalog, /slug: "firstdollar"/);
  assert.match(catalog, /slug: "ngb"/);
  assert.match(catalog, /slug: "fershop"/);
  assert.match(catalog, /slug: "bangalo"/);
  assert.match(catalog, /href: "\/zetti"/);
  assert.match(catalog, /href: "\/trinio"/);
  assert.match(catalog, /href: "\/recursim"/);
  assert.match(catalog, /href: "\/sellentt"/);
  assert.match(catalog, /href: "\/firstdollar"/);
  assert.match(catalog, /href: "\/ngb"/);
  assert.match(catalog, /href: "\/fershop"/);
  assert.match(catalog, /href: "\/bangalo"/);
  assert.match(catalog, /proposalHref: "\/zetti\/proposta"/);
  assert.match(catalog, /proposalHref: "\/trinio\/proposta"/);
});

test("Sellentt diagnosis lives at /sellentt", async () => {
  const page = await readFile(path.join(root, "app/sellentt/page.tsx"), "utf8");
  assert.match(page, /Sellentt/);
  assert.match(page, /força de vendas/i);
  assert.match(page, /Analisar minha operação/);
  assert.match(page, /SlideKeyboardNav/);
  assert.match(page, /data-slide/);
  assert.match(page, /id=\{`oportunidade-\$\{item\.number\}`\}/);
  assert.match(page, /id="mapa"/);
  assert.match(page, /id="prioridades"/);
  assert.doesNotMatch(page, /href=["']\/["']/);
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

test("Trinio PDF route wraps proposal for stable export", async () => {
  const page = await readFile(
    path.join(root, "app/trinio/proposta/pdf/page.tsx"),
    "utf8",
  );
  assert.match(page, /trinio-pdf-export/);
  assert.match(page, /TrinioPropostaPage/);
  assert.match(page, /Versão estável para exportação em PDF/);
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

test("First Dollar proposal lives at /firstdollar with slide keyboard nav", async () => {
  const page = await readFile(
    path.join(root, "app/firstdollar/page.tsx"),
    "utf8",
  );
  const catalog = await readFile(path.join(root, "app/clients.ts"), "utf8");
  assert.match(catalog, /slug: "firstdollar"/);
  assert.match(catalog, /href: "\/firstdollar"/);
  assert.match(page, /First Dollar/);
  assert.match(page, /2,450/);
  assert.match(page, /6,500/);
  assert.match(page, /Recruitment/);
  assert.match(page, /Explorers/);
  assert.match(page, /SlideKeyboardNav/);
  assert.equal(
    (page.match(/data-slide/g) ?? []).length,
    18,
    "expected 18 slide anchors on /firstdollar",
  );
  assert.doesNotMatch(page, /href=["']\/["']/);
});

test("NGB proposal lives at /ngb with slide keyboard nav", async () => {
  const page = await readFile(path.join(root, "app/ngb/page.tsx"), "utf8");
  const catalog = await readFile(path.join(root, "app/clients.ts"), "utf8");
  assert.match(catalog, /slug: "ngb"/);
  assert.match(catalog, /href: "\/ngb"/);
  assert.match(page, /NGB Arquitetura/);
  assert.match(page, /1\.800/);
  assert.match(page, /2\.200/);
  assert.match(page, /Google Ads/);
  assert.match(page, /GEO/);
  assert.match(page, /SlideKeyboardNav/);
  assert.equal(
    (page.match(/data-slide/g) ?? []).length,
    18,
    "expected 18 slide anchors on /ngb",
  );
  assert.doesNotMatch(page, /href=["']\/["']/);
});

test("Fershop strategic scope lives at /fershop with slide keyboard nav", async () => {
  const page = await readFile(path.join(root, "app/fershop/page.tsx"), "utf8");
  const catalog = await readFile(path.join(root, "app/clients.ts"), "utf8");
  assert.match(catalog, /slug: "fershop"/);
  assert.match(catalog, /kind: "Escopo"/);
  assert.match(catalog, /href: "\/fershop"/);
  assert.match(page, /Fershop/);
  assert.match(page, /Baden Powell/);
  assert.match(page, /Escopo estratégico/);
  assert.match(page, /SlideKeyboardNav/);
  assert.doesNotMatch(page, /R\$/);
  assert.doesNotMatch(page, /id="verba"/);
  assert.equal(
    (page.match(/data-slide/g) ?? []).length,
    18,
    "expected 18 slide anchors on /fershop",
  );
  assert.doesNotMatch(page, /href=["']\/["']/);
});

test("Fershop Conecta proposal lives at /fershop/proposta", async () => {
  const page = await readFile(
    path.join(root, "app/fershop/proposta/page.tsx"),
    "utf8",
  );
  const catalog = await readFile(path.join(root, "app/clients.ts"), "utf8");
  assert.match(catalog, /proposalHref: "\/fershop\/proposta"/);
  assert.match(page, /Fershop Conecta/);
  assert.doesNotMatch(page, /Fairshop/);
  assert.match(page, /24\.900/);
  assert.match(page, /1\.890/);
  assert.match(page, /1\.037,50/);
  assert.match(page, /30 dias corridos/);
  assert.match(page, /24 meses/);
  assert.doesNotMatch(page, /9\.960/);
  assert.doesNotMatch(page, /7\.470/);
  assert.match(page, /WhatsApp/);
  assert.match(page, /SlideKeyboardNav/);
  assert.equal(
    (page.match(/data-slide/g) ?? []).length,
    19,
    "expected 19 slide anchors on /fershop/proposta",
  );
  assert.doesNotMatch(page, /href=["']\/["']/);
  assert.doesNotMatch(page, /utm_source=chatgpt/);
});

test("Bangalô commercial proposal lives at /bangalo", async () => {
  const page = await readFile(path.join(root, "app/bangalo/page.tsx"), "utf8");
  const catalog = await readFile(path.join(root, "app/clients.ts"), "utf8");
  assert.match(catalog, /slug: "bangalo"[\s\S]*href: "\/bangalo"/);
  assert.match(page, /Bangalô — Oziel/);
  assert.match(page, /R\$ 980,00/);
  assert.match(page, /R\$ 1\.150,00/);
  assert.match(page, /R\$ 1\.400,00/);
  assert.match(page, /R\$ 3\.130,00/);
  assert.match(page, /R\$ 2\.150,00/);
  assert.match(page, /3 de novembro de 2026/);
  assert.match(page, /Google Ads/);
  assert.match(page, /Meta Ads/);
  assert.match(page, /não\s+está incluído nos honorários da Melive/);
  assert.doesNotMatch(page, /href=["']\/["']/);
});

test("shared password gate blocks project HTML until unlock", async () => {
  const proxy = await readFile(path.join(root, "proxy.ts"), "utf8");
  const tokenFile = await readFile(path.join(root, "app/lib/gate-token.ts"), "utf8");
  const gate = await readFile(path.join(root, "app/lib/gate.ts"), "utf8");
  const api = await readFile(path.join(root, "app/api/acesso/route.ts"), "utf8");
  const acesso = await readFile(path.join(root, "app/acesso/page.tsx"), "utf8");
  const form = await readFile(path.join(root, "app/acesso/GateForm.tsx"), "utf8");
  const password = gate.match(/GATE_PASSWORD = "([^"]+)"/)?.[1];
  const token = tokenFile.match(/GATE_TOKEN =\s*"([^"]+)"/)?.[1];
  assert.ok(password);
  assert.equal(
    createHash("sha256").update(`melive-gate-v1:${password}`).digest("hex"),
    token,
  );
  assert.match(proxy, /NextResponse\.rewrite/);
  assert.match(proxy, /\/acesso/);
  assert.match(proxy, /GATE_TOKEN/);
  assert.match(proxy, /gate-token/);
  assert.match(api, /httpOnly:\s*true/);
  assert.match(api, /passwordMatches/);
  assert.match(gate, /normalizePassword/);
  assert.match(gate, /toLowerCase/);
  assert.match(form, /FormData/);
  assert.doesNotMatch(form, /value=\{password\}/);
  assert.doesNotMatch(acesso, new RegExp(password));
  assert.doesNotMatch(form, new RegExp(password));
  assert.match(acesso, /Acesso restrito/);
});

test("NGB project management opens from the hub card", async () => {
  const hub = await readFile(path.join(root, "app/page.tsx"), "utf8");
  const menu = await readFile(
    path.join(root, "app/components/HubGestaoMenu.tsx"),
    "utf8",
  );
  const catalog = await readFile(path.join(root, "app/clients.ts"), "utf8");
  const page = await readFile(path.join(root, "app/ngb/gestao/page.tsx"), "utf8");
  const content = await readFile(
    path.join(root, "app/ngb/gestao/content.ts"),
    "utf8",
  );
  assert.match(catalog, /gestaoHref: "\/ngb\/gestao"/);
  assert.match(hub, /HubGestaoMenu/);
  assert.match(menu, /Adicionar gestão/);
  assert.match(menu, /hub-gestao/);
  assert.match(content, /Não iniciado/);
  assert.match(page, /data-gestao-blocker/);
  assert.match(page, /<details/);
  assert.match(page, /<summary>/);
  assert.doesNotMatch(page, /<details[^>]*\sopen/);
  assert.match(page, /gestao-chevron/);
  assert.match(content, /Identidade visual/);
  assert.match(content, /733,34/);
  assert.match(content, /733,33/);
  assert.match(content, /R\$ 400/);
  assert.match(content, /Alberto Nagib/);
  assert.match(content, /generate_lead/);
  assert.equal((content.match(/number: "/g) ?? []).length, 14);
  assert.doesNotMatch(page, /chatgpt-content-reference/);
  assert.doesNotMatch(content, /chatgpt-content-reference/);
  assert.doesNotMatch(page, /melive2026/);
  assert.doesNotMatch(`${hub}\n${menu}`, /melive2026/);
});

test("Fershop project management opens from the hub card", async () => {
  const catalog = await readFile(path.join(root, "app/clients.ts"), "utf8");
  const page = await readFile(path.join(root, "app/fershop/gestao/page.tsx"), "utf8");
  const content = await readFile(
    path.join(root, "app/fershop/gestao/content.ts"),
    "utf8",
  );
  const state = await readFile(
    path.join(root, "app/components/GestaoState.tsx"),
    "utf8",
  );
  const ngbPage = await readFile(path.join(root, "app/ngb/gestao/page.tsx"), "utf8");
  const api = await readFile(path.join(root, "app/api/gestao/route.ts"), "utf8");
  const migration = await readFile(
    path.join(root, "supabase/migrations/20261028182100_melive_gestao_checks.sql"),
    "utf8",
  );
  assert.match(catalog, /gestaoHref: "\/fershop\/gestao"/);
  assert.match(content, /Não iniciado/);
  assert.match(content, /Baden Powell, 447/);
  assert.match(content, /Contrato e responsáveis/);
  assert.match(content, /Acessos e pagamento/);
  assert.match(content, /Loja, oferta e mensuração/);
  assert.match(content, /Google Ads/);
  assert.match(content, /Meta Ads/);
  assert.match(content, /Como conheceu a nova loja/);
  assert.equal((content.match(/number: "/g) ?? []).length, 13);
  assert.equal((content.match(/title: "Fora do escopo base"/g) ?? []).length, 1);
  assert.match(page, /data-gestao-blocker/);
  assert.match(page, /<details/);
  assert.match(page, /<summary>/);
  assert.doesNotMatch(page, /<details[^>]*\sopen/);
  assert.match(page, /gestao-chevron/);
  assert.match(page, /GestaoState project="fershop"/);
  assert.match(ngbPage, /GestaoState project="ngb"/);
  assert.match(page, /todo mundo que entra com a senha/);
  assert.match(state, /\/api\/gestao/);
  assert.doesNotMatch(state, /localStorage\.setItem\(STORAGE_KEY/);
  assert.match(api, /GATE_COOKIE/);
  assert.match(api, /listChecks/);
  assert.match(migration, /enable row level security/);
  assert.match(migration, /melive_gestao_checks/);
  assert.doesNotMatch(migration, /values \(1, '[0-9a-f]{32,}'\)/);
  assert.doesNotMatch(`${page}\n${state}\n${api}`, /MELIVE_GESTAO_GATE=/);
  assert.doesNotMatch(page, /chatgpt-content-reference/);
  assert.doesNotMatch(content, /chatgpt-content-reference/);
  assert.doesNotMatch(`${page}\n${content}`, /melive2026/);
});
