import assert from "node:assert/strict";
import test from "node:test";
import { autonomousReviewMarker } from "./autonomous-review-marker.ts";

test("autonomous review marker matches the workflow handoff fixture", () => {
  assert.equal(autonomousReviewMarker, "workflow-handoff");
});
