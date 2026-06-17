import { BookOpenCheck } from "lucide-react";
import { siteConfig } from "../config/site";
import { MascotArt } from "./illustrations/PickleMascots";

const mascotVariant = {
  "captain-crunch": "captain",
  "professor-pickle": "professor",
  dillbert: "dillbert",
  "pickle-pup": "pup",
  "money-jar-jerry": "money"
} as const;

export function PickleBossAcademy() {
  return (
    <section id="academy" className="bg-[#e7ffc7] px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-green-700">
            <BookOpenCheck size={18} aria-hidden="true" />
            Pickle Boss Academy
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-green-950 sm:text-5xl">Business school disguised as pickle fun.</h2>
          <p className="mt-4 text-lg leading-8 text-green-950/75">
            Each lesson turns a real business idea into something a young founder can see, count, and explain.
          </p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="overflow-hidden rounded-[2rem] border-4 border-white bg-[#fffaf0] shadow-[0_10px_0_#7ea850]">
            <img
              src="/assets/pickle-business-plan-board.jpg"
              alt="Cartoon pickle business plan board with blank panels, Matix, pickle mascots, jars, coins, and garden icons"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="rounded-[2rem] bg-white p-4 shadow-sm">
            <div className="rounded-[1.5rem] bg-[#fffaf0] p-4">
              <p className="text-center text-sm font-black uppercase tracking-[0.18em] text-green-700">Matix&apos;s Business Plan</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {siteConfig.businessPlan.map((section) => (
                  <article key={section.id} className="rounded-2xl border-2 border-green-900/10 bg-white p-3">
                    <div className="flex items-center gap-2">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#d8f66d] text-sm font-black text-green-950">
                        {section.badge}
                      </span>
                      <h3 className="text-base font-black leading-tight text-green-950">{section.title}</h3>
                    </div>
                    <ul className="mt-3 grid gap-1.5">
                      {section.points.map((point) => (
                        <li key={point} className="flex gap-2 text-sm font-bold leading-5 text-green-950/75">
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#5ea62d]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <p className="mt-4 rounded-2xl bg-[#d8f66d] p-3 text-center text-sm font-black text-green-950">
                Big dreams start small, even with a pickle.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {siteConfig.academyLessons.map((lesson) => (
              <article key={lesson.id} className="grid grid-cols-[88px_1fr] gap-4 rounded-3xl bg-white p-4 shadow-sm">
                <MascotArt variant={mascotVariant[lesson.mascotId as keyof typeof mascotVariant]} className="w-22" />
                <div>
                  <h3 className="text-xl font-black text-green-950">{lesson.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-green-950/70">{lesson.simpleDefinition}</p>
                  <p className="mt-3 rounded-2xl bg-[#fffaf0] p-3 text-sm font-black text-green-900">{lesson.example}</p>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
