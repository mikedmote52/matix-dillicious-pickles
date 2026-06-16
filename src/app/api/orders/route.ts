import { NextResponse } from "next/server";
import { submitOrderRequest, validateOrderRequest } from "../../../lib/orders";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, errors: { form: "Send the order request as JSON." } }, { status: 400 });
  }

  const validation = validateOrderRequest(body && typeof body === "object" ? body : {});

  if (!validation.ok) {
    return NextResponse.json({ ok: false, errors: validation.errors }, { status: 400 });
  }

  try {
    const result = await submitOrderRequest(validation.value);

    return NextResponse.json({
      ok: true,
      message: result.message,
      mode: result.mode,
      reference: result.reference
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "The adult order email could not be sent. Please try again later.",
        errors: { form: "The adult order email could not be sent. Please try again later." }
      },
      { status: 502 }
    );
  }
}
