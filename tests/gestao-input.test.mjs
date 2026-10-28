import assert from "node:assert/strict";
import test from "node:test";
import { parseGestaoProject, parseSeed, parseTaskId } from "../app/lib/gestao.ts";

const allowed = ["fershop", "ngb"];

test("gestao input accepts portal slugs and task ids", () => {
  assert.equal(parseGestaoProject("fershop", allowed), "fershop");
  assert.equal(parseGestaoProject("ngb", allowed), "ngb");
  assert.equal(parseGestaoProject("zapcore", allowed), null);
  assert.equal(parseGestaoProject("Fershop", allowed), null);
  assert.equal(parseTaskId("s1-t1"), "s1-t1");
  assert.equal(parseTaskId("s13-t30"), "s13-t30");
  assert.equal(parseTaskId("s0-t1"), null);
  assert.equal(parseTaskId("task"), null);
  assert.deepEqual(parseSeed(["s1-t1", "s1-t1", "s2-t4"]), ["s1-t1", "s2-t4"]);
  assert.equal(parseSeed([]), null);
  assert.equal(parseSeed(["s1-t1", "drop table"]), null);
});
