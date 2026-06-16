import test from "node:test";
import assert from "node:assert/strict";
import { submitOrderRequest, validateOrderRequest } from "../lib/orders";

test("accepts a valid pickle mission request", () => {
  const result = validateOrderRequest({
    name: "Aunt Sarah",
    email: "sarah@example.com",
    phone: "555-123-4567",
    quantity: 3,
    flavor: "Classic Dill",
    notes: "Pickup this weekend if possible"
  });

  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.value.quantity, 3);
    assert.equal(result.value.flavor, "Classic Dill");
  }
});

test("rejects missing name invalid email unknown flavor and zero quantity", () => {
  const result = validateOrderRequest({
    name: "",
    email: "not-an-email",
    quantity: 0,
    flavor: "Chocolate Pickles",
    notes: ""
  });

  assert.equal(result.ok, false);
  if (!result.ok) {
    assert.deepEqual(result.errors, {
      name: "Tell us who is requesting pickles.",
      email: "Use a valid email so an adult can follow up.",
      quantity: "Pick at least one jar.",
      flavor: "Choose one of Matix's current flavors."
    });
  }
});

test("trims optional phone and notes without requiring them", () => {
  const result = validateOrderRequest({
    name: "Neighbor Joe",
    email: "joe@example.com",
    quantity: "2",
    flavor: "Garlic Dill",
    phone: "  ",
    notes: "  leave near porch  "
  });

  assert.equal(result.ok, true);
  if (result.ok) {
    assert.equal(result.value.phone, "");
    assert.equal(result.value.notes, "leave near porch");
  }
});

test("sends order email through Resend when adult email env vars are configured", async () => {
  const originalEnv = { ...process.env };
  const calls: unknown[] = [];
  const originalFetch = globalThis.fetch;

  process.env.ORDER_TO_EMAIL = "adult@example.com";
  process.env.ORDER_FROM_EMAIL = "orders@example.com";
  process.env.RESEND_API_KEY = "test-key";
  globalThis.fetch = (async (_url: string | URL | Request, init?: RequestInit) => {
    calls.push(init);
    return new Response(JSON.stringify({ id: "email_123" }), { status: 200 });
  }) as typeof fetch;

  try {
    const result = await submitOrderRequest({
      name: "Aunt Sarah",
      email: "sarah@example.com",
      phone: "",
      quantity: 2,
      flavor: "Classic Dill",
      notes: "Saturday pickup"
    });

    assert.equal(result.mode, "email-sent");
    assert.equal(calls.length, 1);
    const body = JSON.parse(String((calls[0] as RequestInit).body));
    assert.equal(body.to[0], "adult@example.com");
    assert.match(body.text, /Aunt Sarah/);
    assert.match(body.text, /Classic Dill/);
  } finally {
    process.env = originalEnv;
    globalThis.fetch = originalFetch;
  }
});

test("refuses production submissions when adult email env vars are missing", async () => {
  const originalEnv = { ...process.env };

  delete process.env.ORDER_TO_EMAIL;
  delete process.env.ORDER_FROM_EMAIL;
  delete process.env.RESEND_API_KEY;
  process.env.VERCEL = "1";

  try {
    await assert.rejects(
      () =>
        submitOrderRequest({
          name: "Aunt Sarah",
          email: "sarah@example.com",
          phone: "",
          quantity: 2,
          flavor: "Classic Dill",
          notes: ""
        }),
      /Order email is not configured/
    );
  } finally {
    process.env = originalEnv;
  }
});
