import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  PPTX_FILENAME,
  buildProposalPptxBuffer,
  createProposalPptx,
} from "../app/proposta/build-pptx.ts";
import { proposalSlides } from "../app/proposta/content.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("proposal PPTX contains one slide per content entry", () => {
  const pptx = createProposalPptx();
  assert.equal(pptx._slideCount ?? pptx._slides?.length, proposalSlides.length);
  assert.match(PPTX_FILENAME, /\.pptx$/);
});

test("proposal PPTX writes a valid ZIP buffer", async () => {
  const buffer = await buildProposalPptxBuffer();
  assert.ok(buffer.byteLength > 5_000);
  assert.equal(buffer[0], 0x50); // P
  assert.equal(buffer[1], 0x4b); // K
});

test("proposal PPTX uses Melive web typography", async () => {
  const source = await readFile(
    path.join(root, "app/proposta/build-pptx.ts"),
    "utf8",
  );
  assert.match(source, /display:\s*"Impact"/);
  assert.match(source, /body:\s*"Arial"/);
  assert.match(source, /fontFace:\s*FONT\.display/);
  assert.match(source, /fontFace:\s*FONT\.body/);
  assert.doesNotMatch(source, /fontFace:\s*"Arial"/);
});
