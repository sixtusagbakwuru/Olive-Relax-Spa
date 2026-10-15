"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Fades its content up gently the first time it scrolls into view.
 * Content already on screen when the page loads is shown straight away,
 * and visitors who prefer reduced motion never see the effect.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  /** Milliseconds to wait, for staggering items in a row. */
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={state}
      className={className}
      style={state === "shown" ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
