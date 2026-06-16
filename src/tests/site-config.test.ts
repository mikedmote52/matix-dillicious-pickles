import test from "node:test";
import assert from "node:assert/strict";
import { siteConfig } from "../config/site";

test("uses the approved brand and six dollar jar price", () => {
  assert.equal(siteConfig.brand.name, "Matix's Dill-icious Pickles");
  assert.equal(siteConfig.product.pricePerJar, 6);
  assert.equal(siteConfig.brand.founderTitle, "CEO & Chief Pickle Officer");
});

test("includes the required starter flavor lineup", () => {
  const flavorNames = siteConfig.flavors.map((flavor) => flavor.name);

  assert.deepEqual(flavorNames, ["Classic Dill", "Garlic Dill", "Extra Crunch", "Spicy Dill", "Sweet Dill"]);
});

test("keeps badge thresholds in ascending order", () => {
  const thresholds = siteConfig.badges.map((badge) => badge.threshold);
  const sorted = [...thresholds].sort((a, b) => a - b);

  assert.deepEqual(thresholds, sorted);
});

test("includes Pickle Pup and business lesson mascots", () => {
  const mascotNames = siteConfig.mascots.map((mascot) => mascot.name);

  assert.ok(mascotNames.includes("Pickle Pup"));
  assert.ok(mascotNames.includes("Professor Pickle"));
  assert.ok(mascotNames.includes("Money Jar Jerry"));
});

