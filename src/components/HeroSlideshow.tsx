"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { PauseIcon, PlayIcon } from "./ui/Icons";

/**
 * Background photos for the hero that crossfade from one to the next, each
 * with a slow zoom. A small button pauses it, and it starts paused for
 * visitors whose device is set to reduce motion.
 */
export function HeroSlideshow({
  slides,
  interval = 6000,
}: {
  slides: string[];
  /** Milliseconds each photo stays on screen. */
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPaused(true);
    }
  }, []);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      interval,
    );
    return () => window.clearInterval(id);
  }, [paused, slides.length, interval]);

  return (
    <>
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        {slides.map((src, i) => (
          <div
            key={src}
            data-active={i === index}
            className={cn(
              "hero-slide absolute inset-0 transition-opacity duration-[1600ms] ease-in-out",
              i === index ? "opacity-100" : "opacity-0",
            )}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {slides.length > 1 ? (
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play background slideshow" : "Pause background slideshow"}
          className="absolute bottom-4 left-4 z-10 inline-flex size-11 items-center justify-center rounded-full border border-line bg-canvas/60 text-fg backdrop-blur-sm transition-colors hover:border-accent hover:text-accent sm:bottom-6 sm:left-6"
        >
          {paused ? <PlayIcon className="size-5" /> : <PauseIcon className="size-5" />}
        </button>
      ) : null}
    </>
  );
}
