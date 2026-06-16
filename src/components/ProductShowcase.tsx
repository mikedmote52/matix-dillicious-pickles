import { Package, Sparkle } from "lucide-react";
import { siteConfig } from "../config/site";

export function ProductShowcase() {
  return (
    <section id="jars" className="bg-[#fffaf0] px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-green-700">Pickle jars</p>
            <h2 className="mt-3 text-4xl font-black text-green-950 sm:text-5xl">$6 jars of crunchy possibility.</h2>
          </div>
          <div className="rounded-3xl bg-[#ffd861] px-5 py-4 text-lg font-black text-green-950 shadow-[0_6px_0_#c7951d]">
            ${siteConfig.product.pricePerJar} per jar
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {siteConfig.flavors.map((flavor, index) => (
            <article key={flavor.id} className="group rounded-3xl border-2 border-green-900/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 grid h-28 place-items-center rounded-2xl bg-[#9ed8ec]/35">
                <div className="relative h-24 w-16 rounded-b-3xl rounded-t-xl border-4 border-[#7fb3c9] bg-[#dff6ff]/80">
                  <div className="absolute -top-3 left-1/2 h-5 w-12 -translate-x-1/2 rounded-md bg-[#ffd861]" />
                  <div className="absolute left-1/2 top-8 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full bg-[#5ea62d] text-white">
                    {index % 2 === 0 ? <Package size={22} aria-hidden="true" /> : <Sparkle size={22} aria-hidden="true" />}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-black text-green-950">{flavor.name}</h3>
              <p className="mt-2 text-sm leading-6 text-green-950/72">{flavor.description}</p>
              <p className="mt-4 rounded-2xl bg-[#f5ffe8] p-3 text-xs font-bold leading-5 text-green-900">{flavor.mascotNote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
