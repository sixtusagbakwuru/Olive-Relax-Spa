import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** A soft, hand-drawn pebble outline (viewBox 0 0 100 75). */
const pebblePath =
  "M52 1.5C73 0.5 96 9 98.5 31C101 52 86 72 60 73.5C35 75 6 69 2 46C-2 22 27 2.5 52 1.5Z";

const pebbleMask = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 75' preserveAspectRatio='none'><path d='${pebblePath}'/></svg>`,
)}") center / 100% 100% no-repeat`;

/**
 * Frames a photo in an organic pebble shape, with a thin gold outline set
 * slightly behind it, echoing the offset line around the hero arch.
 */
export function PebbleFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative aspect-[4/3]", className)}>
      <svg
        aria-hidden="true"
        viewBox="0 0 100 75"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full translate-x-3 translate-y-2 -rotate-3 overflow-visible text-accent"
        fill="none"
      >
        <path
          d={pebblePath}
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ mask: pebbleMask, WebkitMask: pebbleMask }}
      >
        {children}
      </div>
    </div>
  );
}
