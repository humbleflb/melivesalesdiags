import assert from "node:assert/strict";
import test from "node:test";
import {
  PPTX_FILENAME,
  buildProposalPptxBuffer,
  createProposalPptx,
} from "../app/proposta/build-pptx.ts";
import { proposalSlides } from "../app/proposta/content.ts";

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
