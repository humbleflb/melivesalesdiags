import { createHash, timingSafeEqual } from "node:crypto";
import { GATE_TOKEN } from "./gate-token";

export const GATE_PASSWORD = "melive2026";

function digest(value: string) {
  return createHash("sha256").update(`melive-gate-v1:${value}`).digest();
}

export function passwordMatches(input: string) {
  const candidate = digest(input);
  const expected = digest(GATE_PASSWORD);
  return timingSafeEqual(candidate, expected);
}

export function gateTokenMatchesPassword() {
  return digest(GATE_PASSWORD).toString("hex") === GATE_TOKEN;
}
