import { siteConfig } from "../config/site";

export function SiteFooter() {
  return (
    <footer className="bg-green-950 px-4 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-black">{siteConfig.brand.name}</p>
          <p className="mt-1 text-sm text-white/70">{siteConfig.brand.tagline}</p>
        </div>
        <p className="max-w-md text-sm leading-6 text-white/70">
          Order requests are reviewed by an adult. No child contact information, online payments, shipping, or guaranteed fulfillment in v1.
        </p>
      </div>
    </footer>
  );
}

