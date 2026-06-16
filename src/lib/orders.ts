import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "../config/site";

export type OrderRequestInput = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  quantity?: unknown;
  flavor?: unknown;
  notes?: unknown;
};

export type OrderRequest = {
  name: string;
  email: string;
  phone: string;
  quantity: number;
  flavor: string;
  notes: string;
};

export type OrderValidationResult =
  | { ok: true; value: OrderRequest }
  | { ok: false; errors: Partial<Record<keyof OrderRequest, string>> };

export type OrderSubmissionResult = {
  mode: "dev-file" | "email-sent";
  message: string;
  reference: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const asText = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const currentFlavorNames = new Set(siteConfig.flavors.map((flavor) => flavor.name));

export function validateOrderRequest(input: OrderRequestInput): OrderValidationResult {
  const name = asText(input.name);
  const email = asText(input.email).toLowerCase();
  const phone = asText(input.phone);
  const flavor = asText(input.flavor);
  const notes = asText(input.notes);
  const quantity = Number(input.quantity);
  const normalizedQuantity = Number.isFinite(quantity) ? Math.floor(quantity) : 0;
  const errors: Partial<Record<keyof OrderRequest, string>> = {};

  if (!name) {
    errors.name = "Tell us who is requesting pickles.";
  }

  if (!emailPattern.test(email)) {
    errors.email = "Use a valid email so an adult can follow up.";
  }

  if (normalizedQuantity < 1) {
    errors.quantity = "Pick at least one jar.";
  }

  if (!currentFlavorNames.has(flavor)) {
    errors.flavor = "Choose one of Matix's current flavors.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    value: {
      name,
      email,
      phone,
      quantity: normalizedQuantity,
      flavor,
      notes
    }
  };
}

export async function submitOrderRequest(order: OrderRequest): Promise<OrderSubmissionResult> {
  const reference = `pickle-${Date.now()}`;

  if (process.env.ORDER_TO_EMAIL && process.env.ORDER_FROM_EMAIL && process.env.RESEND_API_KEY) {
    const text = [
      `New pickle mission: ${reference}`,
      "",
      `Name: ${order.name}`,
      `Email: ${order.email}`,
      `Phone: ${order.phone || "Not provided"}`,
      `Quantity: ${order.quantity}`,
      `Flavor: ${order.flavor}`,
      `Notes: ${order.notes || "None"}`,
      "",
      "This is an order request only. An adult should review before confirming pickup, payment, or fulfillment."
    ].join("\n");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: process.env.ORDER_FROM_EMAIL,
        to: [process.env.ORDER_TO_EMAIL],
        subject: `Pickle mission request from ${order.name}`,
        text
      })
    });

    if (!response.ok) {
      throw new Error(`Order email provider failed with status ${response.status}`);
    }

    return {
      mode: "email-sent",
      message: "Your pickle mission has been received! An adult will review it and follow up.",
      reference
    };
  }

  const ordersDir = join(process.cwd(), "data", "orders");
  await mkdir(ordersDir, { recursive: true });
  await writeFile(
    join(ordersDir, `${reference}.json`),
    `${JSON.stringify({ reference, createdAt: new Date().toISOString(), order }, null, 2)}\n`,
    "utf8"
  );

  return {
    mode: "dev-file",
    message: "Your pickle mission has been received in local dev mode. Configure ORDER_TO_EMAIL before launch.",
    reference
  };
}
