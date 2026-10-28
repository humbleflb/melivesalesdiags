import { createHash, timingSafeEqual } from "node:crypto";
import { GATE_TOKEN } from "./gate-token";

export const GATE_PASSWORD = "melive2026";

function digest(value: string) {
  return createHash("sha256").update(`melive-gate-v1:${value}`).digest();
}

export function normalizePassword(input: string) {
  return input.normalize("NFKC").toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function passwordMatches(input: string) {
  const candidate = digest(normalizePassword(input));
  const expected = digest(normalizePassword(GATE_PASSWORD));
  return timingSafeEqual(candidate, expected);
}

export function gateTokenMatchesPassword() {
  return digest(GATE_PASSWORD).toString("hex") === GATE_TOKEN;
}
