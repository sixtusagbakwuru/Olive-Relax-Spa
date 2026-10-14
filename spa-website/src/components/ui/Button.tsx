import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "solid" | "outline";

const base =
  "inline-flex min-h-12 items-center justify-center rounded-control px-7 text-body font-medium transition-colors";

const variants: Record<Variant, string> = {
  solid: "bg-action text-on-action hover:bg-action-hover",
  outline: "border border-line text-fg hover:border-fg",
};

/**
 * A link styled as a button. Internal links ("/...") use client-side
 * navigation; anything else opens in a new tab.
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

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {children}
    </a>
  );
}
