import { Sprout, Star, Trophy } from "lucide-react";
import { siteConfig } from "../config/site";
import { MascotArt } from "./illustrations/PickleMascots";

const storySteps = [
  {
    icon: Sprout,
    title: "Garden",
    text: "Matix starts with cucumbers he grows himself, learning that products begin with care."
  },
  {
    icon: Star,
    title: "Recipe",
    text: "Each jar becomes a tiny experiment in flavor, crunch, labels, and customer happiness."
  },
  {
    icon: Trophy,
    title: "Business",
    text: "Every request teaches revenue, costs, profit, saving, reinvestment, and service."
  }
];

export function AboutMatix() {
  return (
    <section id="meet" className="bg-[#f5ffe8] px-4 py-16">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-72 rounded-[2rem] bg-[#9ed8ec] p-6 shadow-[0_10px_0_#4d9db8]">
          <div className="absolute inset-x-8 bottom-8 h-20 rounded-full bg-[#5ea62d]" />
          <div className="absolute left-1/2 top-8 h-52 w-40 -translate-x-1/2 rounded-[45%_45%_34%_34%] bg-[#ffd861]">
            <div className="absolute left-1/2 top-5 h-20 w-24 -translate-x-1/2 rounded-full bg-[#f5c78e]" />
            <div className="absolute left-1/2 top-4 h-11 w-32 -translate-x-1/2 rounded-full bg-[#b98243]" />
            <div className="absolute left-[42%] top-[74px] h-2.5 w-2.5 rounded-full bg-green-950" />
            <div className="absolute right-[42%] top-[74px] h-2.5 w-2.5 rounded-full bg-green-950" />
            <div className="absolute left-1/2 top-24 h-7 w-16 -translate-x-1/2 rounded-b-full border-b-4 border-green-950" />
            <div className="absolute bottom-10 left-1/2 h-24 w-28 -translate-x-1/2 rounded-3xl bg-[#4aa0f0]" />
          </div>
          <MascotArt variant="dillbert" className="absolute bottom-2 right-4 w-28" />
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-green-700">Meet the founder</p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-green-950 sm:text-5xl">{siteConfig.brand.founder} runs the crunch lab.</h2>
          <p className="mt-4 text-lg leading-8 text-green-950/78">
            Matix&apos;s pickle business is part garden project, part kitchen experiment, and part business school. The goal is not just selling jars. It is learning how a real idea becomes a product people remember.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {storySteps.map((step) => (
              <article key={step.title} className="rounded-3xl bg-white p-4 shadow-sm">
                <step.icon className="mb-3 text-green-700" aria-hidden="true" />
                <h3 className="text-lg font-black text-green-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-green-950/70">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

