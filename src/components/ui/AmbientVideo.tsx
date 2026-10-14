"use client";

import { useEffect, useRef } from "react";

/**
 * A silent, looping background video. It starts by itself, except for
 * visitors who have asked their device to reduce motion; they see the
 * poster image instead.
 */
export function AmbientVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.play().catch(() => {
      // Autoplay was blocked by the browser; the poster stays visible.
    });
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
