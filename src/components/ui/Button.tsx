import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "solid" | "outline";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-control px-7 text-body font-medium transition-colors duration-300";

const variants: Record<Variant, string> = {
  solid: "bg-action text-on-action hover:bg-action-hover",
  outline: "border border-line text-fg hover:border-accent hover:text-accent",
};

/**
 * A link styled as a button.
 * - "https://..." links open in a new tab (WhatsApp, maps).
 * - "#section" and "/#section" links jump to a section of the page.
 * - Other "/..." links use client-side navigation.
 */
export function Button({
  href,
  variant = "solid",
  children,
  className,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  const classes = cn(base, variants[variant], className);

  if (/^https?:/.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  if (href.includes("#")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
