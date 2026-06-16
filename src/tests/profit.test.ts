import test from "node:test";
import assert from "node:assert/strict";
import { siteConfig } from "../config/site";
import { calculateProfitBreakdown } from "../lib/profit";

test("calculates revenue costs profit savings and reinvestment for pickle jars", () => {
  const result = calculateProfitBreakdown(10);

  assert.equal(result.jarsSold, 10);
  assert.equal(result.pricePerJar, siteConfig.product.pricePerJar);
  assert.equal(result.revenue, 60);
  assert.equal(result.estimatedCosts, 24);
  assert.equal(result.profit, 36);
  assert.equal(result.savings, 18);
  assert.equal(result.reinvestment, 18);
});

test("clamps negative jar counts to zero", () => {
  const result = calculateProfitBreakdown(-4);

  assert.equal(result.jarsSold, 0);
  assert.equal(result.revenue, 0);
  assert.equal(result.profit, 0);
});

