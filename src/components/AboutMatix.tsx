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
        <div className="relative overflow-hidden rounded-[2rem] bg-[#9ed8ec] p-3 shadow-[0_10px_0_#4d9db8]">
          <img
            src="/assets/matix-founder-card.jpg"
            alt="Cartoon portrait of Matix smiling with a pickle jar and two pickle sidekicks"
            className="h-full max-h-[560px] w-full rounded-[1.5rem] object-cover object-top"
          />
          <MascotArt variant="dillbert" className="absolute bottom-1 right-2 w-24 drop-shadow-xl" />
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
