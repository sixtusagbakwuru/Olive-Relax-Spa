import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

export type Tone = "shell" | "sand" | "brand" | "deep";

const toneClass: Record<Tone, string> = {
  shell: "tone-shell",
  sand: "tone-sand",
  brand: "tone-brand",
  deep: "tone-deep",
};

/**
 * A full-width band of the page. The tone sets the background, and all text,
 * borders and buttons inside adapt to it (see src/styles/tokens.css).
 */
export function Section({
  tone = "shell",
  children,
  className,
  id,
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn(toneClass[tone], "py-section", className)}>
      <Container>{children}</Container>
    </section>
  );
}
