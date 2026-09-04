import { describe, expect, it } from "vitest";

import { GRANULARITIES } from "./ControlBar";

describe("reporting granularity controls", () => {
  it("maps every reporting control to its mode", () => {
    const keys = GRANULARITIES.map((item) => item.key);
    expect(keys).toEqual(["month", "quarter", "ytd", "year"]);
  });
});
