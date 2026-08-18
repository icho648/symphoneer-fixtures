import assert from "node:assert/strict";
import test from "node:test";
import { processCapacityE2eMarker } from "./process-capacity-e2e-20260818-2255.js";

test("exports the process-capacity E2E marker", () => {
  assert.deepEqual(processCapacityE2eMarker, "20260818-2255");
});
