import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: siteConfig.brand.name,
  description: siteConfig.brand.tagline
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

