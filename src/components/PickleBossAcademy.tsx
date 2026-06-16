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
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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

