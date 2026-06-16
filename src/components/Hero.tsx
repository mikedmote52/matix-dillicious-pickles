"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, GraduationCap, ShoppingBasket, Sprout } from "lucide-react";
import { siteConfig } from "../config/site";
import { MascotArt } from "./illustrations/PickleMascots";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden bg-[#fffaf0]">
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,#9ed8ec_0%,rgba(158,216,236,0)_100%)]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-68px)] max-w-6xl content-center gap-8 px-4 py-10 md:grid-cols-[1.05fr_0.95fr] md:py-14">
        <div className="flex flex-col justify-center">
          <p className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-green-900 shadow-sm">
            <Sprout size={18} aria-hidden="true" />
            {siteConfig.brand.founderTitle}
          </p>
          <h1 className="text-balance text-5xl font-black leading-[0.95] text-green-950 sm:text-6xl lg:text-7xl">
            Welcome to Matix&apos;s Dill-icious Pickles!
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-xl font-extrabold leading-tight text-green-900 sm:text-2xl">
            I grow &apos;em. I pickle &apos;em. You crunch &apos;em.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-green-950/78">{siteConfig.brand.tagline}</p>
          <div className="mt-7 grid gap-3 sm:flex">
            <a
              href="#order"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#5ea62d] px-5 py-4 text-base font-black text-white shadow-[0_6px_0_#34651f] transition hover:-translate-y-0.5"
            >
              <ShoppingBasket aria-hidden="true" />
              Order Pickles
            </a>
            <a
              href="#meet"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#ffd861] px-5 py-4 text-base font-black text-green-950 shadow-[0_6px_0_#c7951d] transition hover:-translate-y-0.5"
            >
              <ArrowDown aria-hidden="true" />
              Meet Matix
            </a>
            <a
              href="#academy"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#9ed8ec] px-5 py-4 text-base font-black text-green-950 shadow-[0_6px_0_#4d9db8] transition hover:-translate-y-0.5"
            >
              <GraduationCap aria-hidden="true" />
              Learn Business
            </a>
          </div>
        </div>
        <div className="relative min-h-[430px]">
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -12, 0], rotate: [-1, 1, -1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 h-72 w-56 -translate-x-1/2 rounded-[44%_44%_36%_36%] bg-[#ffd861] shadow-2xl sm:h-80 sm:w-64"
          >
            <div className="absolute left-1/2 top-7 h-24 w-28 -translate-x-1/2 rounded-[50%] bg-[#f5c78e]" />
            <div className="absolute left-1/2 top-5 h-14 w-36 -translate-x-1/2 rounded-[50%_50%_40%_40%] bg-[#b98243]" />
            <div className="absolute left-[42%] top-20 h-3 w-3 rounded-full bg-green-950" />
            <div className="absolute right-[42%] top-20 h-3 w-3 rounded-full bg-green-950" />
            <div className="absolute left-1/2 top-32 h-32 w-36 -translate-x-1/2 rounded-3xl bg-[#4aa0f0]" />
            <div className="absolute left-1/2 top-27 h-8 w-20 -translate-x-1/2 rounded-b-full border-b-4 border-green-950" />
            <div className="absolute left-1/2 top-56 -translate-x-1/2 rounded-full bg-white px-4 py-2 text-center text-xs font-black text-green-950 shadow">
              Chief Pickle Officer
            </div>
          </motion.div>
          <motion.div
            animate={reduceMotion ? undefined : { rotate: [0, 4, -3, 0], y: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-0 w-40 sm:w-52"
          >
            <MascotArt variant="captain" />
          </motion.div>
          <motion.div
            animate={reduceMotion ? undefined : { x: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-0 w-44 sm:w-56"
          >
            <MascotArt variant="pup" />
          </motion.div>
          <div className="absolute bottom-16 left-1/2 -z-10 h-40 w-72 -translate-x-1/2 rounded-full bg-[#9edc72]/50 blur-2xl" />
        </div>
      </div>
    </section>
  );
}

