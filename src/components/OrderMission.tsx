"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Send, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";
import { siteConfig } from "../config/site";
import { MascotArt } from "./illustrations/PickleMascots";

type OrderErrors = Partial<Record<"name" | "email" | "phone" | "quantity" | "flavor" | "notes" | "form", string>>;

type OrderState =
  | { status: "idle"; errors: OrderErrors; message: string }
  | { status: "submitting"; errors: OrderErrors; message: string }
  | { status: "success"; errors: OrderErrors; message: string; reference: string }
  | { status: "error"; errors: OrderErrors; message: string };

const initialState: OrderState = { status: "idle", errors: {}, message: "" };

export function OrderMission() {
  const [state, setState] = useState<OrderState>(initialState);
  const reduceMotion = useReducedMotion();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({ status: "submitting", errors: {}, message: "Sending pickle mission..." });

    const response = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        quantity: formData.get("quantity"),
        flavor: formData.get("flavor"),
        notes: formData.get("notes")
      })
    });

    const payload = (await response.json()) as {
      ok?: boolean;
      errors?: OrderErrors;
      message?: string;
      reference?: string;
    };

    if (!response.ok || !payload.ok) {
      setState({
        status: "error",
        errors: payload.errors ?? { form: "The pickle mission could not be sent." },
        message: payload.message ?? "Please fix the highlighted fields."
      });
      return;
    }

    form.reset();
    setState({
      status: "success",
      errors: {},
      message: payload.message ?? "Your pickle mission has been received!",
      reference: payload.reference ?? "pickle-mission"
    });
  }

  return (
    <section id="order" className="bg-[#fffaf0] px-4 py-16">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] bg-[#ffd861] p-6 shadow-[0_10px_0_#c7951d]">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-green-900">Order request</p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-green-950">Send a Pickle Mission.</h2>
          <p className="mt-4 text-lg leading-8 text-green-950/76">
            This is a request form, not checkout. An adult reviews each mission and follows up about timing, pickup, and payment.
          </p>
          <motion.div
            animate={reduceMotion ? undefined : { rotate: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto mt-8 max-w-xs"
          >
            <MascotArt variant="money" />
          </motion.div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-[2rem] border-2 border-green-900/10 bg-white p-5 shadow-sm sm:p-6" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" error={state.errors.name} required />
            <Field label="Email" name="email" type="email" error={state.errors.email} required />
            <Field label="Phone" name="phone" type="tel" error={state.errors.phone} />
            <Field label="Quantity" name="quantity" type="number" min="1" defaultValue="1" error={state.errors.quantity} required />
            <label className="grid gap-2 text-sm font-black text-green-950 sm:col-span-2">
              Flavor
              <select name="flavor" required className="min-h-12 rounded-2xl border-2 border-green-900/15 bg-[#f5ffe8] px-4 text-base outline-none focus:border-green-700">
                {siteConfig.flavors.map((flavor) => (
                  <option key={flavor.id} value={flavor.name}>
                    {flavor.name}
                  </option>
                ))}
              </select>
              {state.errors.flavor ? <span className="text-sm font-bold text-red-700">{state.errors.flavor}</span> : null}
            </label>
            <label className="grid gap-2 text-sm font-black text-green-950 sm:col-span-2">
              Notes
              <textarea
                name="notes"
                rows={4}
                placeholder="Flavor mix, pickup timing, or encouraging pickle words"
                className="rounded-2xl border-2 border-green-900/15 bg-[#f5ffe8] px-4 py-3 text-base outline-none focus:border-green-700"
              />
            </label>
          </div>
          {state.message ? (
            <div
              className={`mt-5 rounded-2xl p-4 text-sm font-black ${
                state.status === "success" ? "bg-[#e7ffc7] text-green-900" : state.status === "error" ? "bg-red-50 text-red-800" : "bg-[#9ed8ec]/30 text-green-900"
              }`}
              role="status"
            >
              <span className="inline-flex items-center gap-2">
                {state.status === "success" ? <CheckCircle2 size={18} aria-hidden="true" /> : <Sparkles size={18} aria-hidden="true" />}
                {state.message}
              </span>
              {state.status === "success" ? <span className="mt-1 block text-xs">Reference: {state.reference}</span> : null}
            </div>
          ) : null}
          <button
            type="submit"
            disabled={state.status === "submitting"}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#5ea62d] px-5 py-4 text-base font-black text-white shadow-[0_6px_0_#34651f] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            <Send size={19} aria-hidden="true" />
            {state.status === "submitting" ? "Sending..." : "Send Pickle Mission"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  error,
  type = "text",
  required = false,
  min,
  defaultValue
}: {
  label: string;
  name: string;
  error?: string;
  type?: string;
  required?: boolean;
  min?: string;
  defaultValue?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-black text-green-950">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        min={min}
        defaultValue={defaultValue}
        className="min-h-12 rounded-2xl border-2 border-green-900/15 bg-[#f5ffe8] px-4 text-base outline-none focus:border-green-700"
      />
      {error ? <span className="text-sm font-bold text-red-700">{error}</span> : null}
    </label>
  );
}

