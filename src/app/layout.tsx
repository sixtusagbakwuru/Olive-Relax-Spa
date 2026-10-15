import type { Metadata } from "next";
import type { ReactNode } from "react";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/content/site";

// Typefaces, installed from npm so the site never has to download them from
// Google. To change them, swap these imports and update --font-display and
// --font-body in src/styles/tokens.css.
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Home spa treatments in ${site.city}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="tone-shell flex min-h-screen flex-col font-body text-body antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
