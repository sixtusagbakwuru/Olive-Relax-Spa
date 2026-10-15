import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const petals = [
  "M0 0C132 -93 112 -335 0 -465C-112 -335 -132 -93 0 0Z",
  "M0 -6V-452",
  "M0 0C129 -24 247 -230 250 -380C123 -311 -17 -120 0 0Z",
  "M0 0C-129 -24 -247 -230 -250 -380C-123 -311 17 -120 0 0Z",
  "M0 0C131 53 334 -71 405 -212C267 -199 52 -97 0 0Z",
  "M0 0C-131 53 -334 -71 -405 -212C-267 -199 -52 -97 0 0Z",
];

/**
 * The lotus icon, drawn in the accent (gold) color.
 * With `animated`, the petals draw themselves in when the page loads
 * (see .lotus-draw in globals.css).
 */
export function LogoMark({
  className,
  animated = false,
}: {
  className?: string;
  animated?: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="-430 -490 860 530"
      fill="none"
      stroke="currentColor"
      strokeWidth="24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-8 w-auto text-accent", animated && "lotus-draw", className)}
    >
      {petals.map((d) => (
        <path key={d} d={d} pathLength={animated ? 1 : undefined} />
      ))}
    </svg>
  );
}

/** Icon plus the business name, for the header and footer. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark />
      <span className="font-display text-heading font-medium tracking-[0.02em] text-accent">
        {site.name}
      </span>
    </span>
  );
}
