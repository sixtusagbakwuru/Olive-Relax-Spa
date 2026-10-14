import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const archPath = "M0 140V58C0 30 28 18 50 0c22 18 50 30 50 58v82z";

/**
 * The arch window from the logo. Pass an image as children; until then it
 * shows a labelled placeholder so it is clear which photo belongs here.
 */
export function ArchFrame({
  label,
  children,
  className,
}: {
  label: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative aspect-[5/7] w-full", className)}>
      <svg
        aria-hidden="true"
        viewBox="0 0 100 140"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full translate-x-3 translate-y-3 overflow-visible text-accent"
        fill="none"
      >
        <path
          d={archPath}
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="arch-window absolute inset-0 overflow-hidden bg-placeholder">
        {children ?? (
          <div className="flex h-full items-end justify-center px-6 pb-10 text-center text-small text-muted">
            Photo: {label}
          </div>
        )}
      </div>
    </div>
  );
}
