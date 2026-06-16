"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award } from "lucide-react";
import { siteConfig } from "../config/site";

export function AchievementBadges() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[#fffaf0] px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3">
          <Award className="text-[#ff9b45]" size={34} aria-hidden="true" />
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-green-700">Achievement shelf</p>
            <h2 className="text-4xl font-black text-green-950">Crunch goals to unlock.</h2>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.badges.map((badge, index) => (
            <motion.article
              key={badge.id}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.04 }}
              className="rounded-3xl border-2 border-green-900/10 bg-white p-5 shadow-sm"
            >
              <div className="mb-4 grid h-16 w-16 place-items-center rounded-full bg-[#ffd861] text-2xl font-black text-green-950 shadow-[0_4px_0_#c7951d]">
                {badge.threshold}
              </div>
              <h3 className="text-xl font-black text-green-950">{badge.name}</h3>
              <p className="mt-2 text-sm leading-6 text-green-950/70">{badge.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

