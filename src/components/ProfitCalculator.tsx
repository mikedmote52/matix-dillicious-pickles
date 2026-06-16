"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Coins, PiggyBank, RotateCw } from "lucide-react";
import { useMemo, useState } from "react";
import { calculateProfitBreakdown } from "../lib/profit";

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

export function ProfitCalculator() {
  const [jarsSold, setJarsSold] = useState(10);
  const reduceMotion = useReducedMotion();
  const result = useMemo(() => calculateProfitBreakdown(jarsSold), [jarsSold]);

  const stats = [
    { label: "Revenue", value: result.revenue, icon: Coins, color: "bg-[#ffd861]" },
    { label: "Estimated Costs", value: result.estimatedCosts, icon: RotateCw, color: "bg-[#9ed8ec]" },
    { label: "Profit", value: result.profit, icon: PiggyBank, color: "bg-[#d8f66d]" },
    { label: "Savings", value: result.savings, icon: PiggyBank, color: "bg-[#b89cf5]" },
    { label: "Reinvestment", value: result.reinvestment, icon: Coins, color: "bg-[#ff9b45]" }
  ];

  return (
    <section className="bg-[#9ed8ec] px-4 py-16">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-green-900">Profit calculator</p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-green-950 sm:text-5xl">Slide the jars. Watch the business grow.</h2>
          <p className="mt-4 text-lg leading-8 text-green-950/76">
            This uses a simple teaching estimate: each jar sells for $6, estimated costs are subtracted, then profit is split between savings and reinvestment.
          </p>
          <label htmlFor="jarsSold" className="mt-8 block text-lg font-black text-green-950">
            Pickle jars sold: {result.jarsSold}
          </label>
          <input
            id="jarsSold"
            type="range"
            min="0"
            max="100"
            value={jarsSold}
            onChange={(event) => setJarsSold(Number(event.target.value))}
            className="mt-4 w-full accent-green-700"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((stat) => (
            <motion.article
              key={stat.label}
              animate={reduceMotion ? undefined : { scale: [1, 1.02, 1] }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl bg-white p-5 shadow-sm"
            >
              <div className={`mb-4 grid h-12 w-12 place-items-center rounded-2xl ${stat.color}`}>
                <stat.icon className="text-green-950" aria-hidden="true" />
              </div>
              <p className="text-sm font-black uppercase tracking-[0.14em] text-green-700">{stat.label}</p>
              <p className="mt-2 text-4xl font-black text-green-950">{money.format(stat.value)}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

