import { site } from "@/content/site";
import { cn } from "@/lib/cn";

/** The arch mark. Line color follows the text color; the droplet uses the accent. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 150"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-11 w-auto", className)}
    >
      <path
        d="M20 142V70C20 40 45 26 60 8c15 18 40 32 40 62v72"
        stroke="currentColor"
        strokeWidth="3.5"
      />
      <path
        d="M60 56c12 16 17 26 17 36a17 17 0 0 1-34 0c0-10 5-20 17-36z"
        fill="var(--tone-accent)"
      />
      <path
        d="M46 124q14-7 28 0M40 136q20-10 40 0"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}

/** Mark plus the business name, for the header and footer. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark />
      <span className="font-display text-heading font-medium tracking-[0.08em]">
        {site.name}
      </span>
    </span>
  );
}
