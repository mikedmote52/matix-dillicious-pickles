import { ShoppingBasket, Sparkles } from "lucide-react";
import { siteConfig } from "../config/site";

const nav = [
  { href: "#meet", label: "Meet" },
  { href: "#jars", label: "Jars" },
  { href: "#order", label: "Order" },
  { href: "#academy", label: "Academy" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-green-900/10 bg-[#fffaf0]/92 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <a href="#top" className="flex min-w-0 items-center gap-2 font-black text-green-900">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#d8f66d] shadow-sm">
            <Sparkles size={20} aria-hidden="true" />
          </span>
          <span className="truncate text-sm sm:text-base">{siteConfig.brand.name}</span>
        </a>
        <nav className="hidden items-center gap-2 sm:flex" aria-label="Main navigation">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm font-bold text-green-950 hover:bg-green-100">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#order"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#ff9b45] px-4 py-2 text-sm font-black text-green-950 shadow-[0_4px_0_#b85f1e] transition hover:-translate-y-0.5"
        >
          <ShoppingBasket size={18} aria-hidden="true" />
          Order
        </a>
      </div>
    </header>
  );
}

