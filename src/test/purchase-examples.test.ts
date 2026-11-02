import { describe, expect, it } from "vitest";
import { nextPurchaseExample, purchaseExamples } from "../lib/purchase-examples";

describe("purchase simulation names", () => {
  it("provides 100 different Brazilian example names before repeating", () => {
    expect(purchaseExamples).toHaveLength(100);
    expect(new Set(purchaseExamples).size).toBe(100);
    let index = 0;
    const seen = new Set<string>();
    for (let count = 0; count < 100; count++) {
      const name = purchaseExamples[index];
      if (name === undefined) throw new Error("Missing simulation name");
      seen.add(name);
      index = nextPurchaseExample(index);
    }
    expect(seen.size).toBe(100);
    expect(index).toBe(0);
  });
});