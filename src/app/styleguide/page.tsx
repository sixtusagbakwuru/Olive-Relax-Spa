import type { Metadata } from "next";
import { MenuCard } from "@/components/MenuCard";
import { ArchFrame } from "@/components/ui/ArchFrame";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import type { Tone } from "@/components/ui/Section";
import { treatments } from "@/content/treatments";

export const metadata: Metadata = {
  title: "Style guide",
  robots: { index: false },
};

const palette = [
  { token: "--brand-primary", name: "Primary", use: "Header, hero, buttons" },
  { token: "--brand-primary-deep", name: "Primary deep", use: "Footer" },
  { token: "--brand-neutral", name: "Neutral", use: "Alternate sections" },
  { token: "--brand-neutral-light", name: "Neutral light", use: "Page background" },
  { token: "--brand-accent", name: "Accent", use: "Thin lines, small marks" },
  { token: "--brand-ink", name: "Ink", use: "Text on light backgrounds" },
];

const tones: Array<{ tone: Tone; className: string }> = [
  { tone: "shell", className: "tone-shell" },
  { tone: "sand", className: "tone-sand" },
  { tone: "brand", className: "tone-brand" },
  { tone: "deep", className: "tone-deep" },
];

const typeScale = [
  { className: "font-display text-display", label: "text-display", sample: "Slow down" },
  { className: "font-display text-title", label: "text-title", sample: "Treatment menu" },
  { className: "font-display text-heading", label: "text-heading", sample: "Traditional hammam" },
  { className: "text-lead", label: "text-lead", sample: "Hammam rituals, massage and facials." },
  { className: "text-body", label: "text-body", sample: "Steam, black soap, a kessa glove scrub and a warm rinse." },
  { className: "text-small", label: "text-small", sample: "60 min" },
];

/**
 * A live view of the design system. Everything here reads from
 * src/styles/tokens.css, so it is the quickest place to check a color change.
 */
export default function StyleGuidePage() {
  return (
    <Container className="flex flex-col gap-20 py-section">
      <header>
        <h1 className="text-display">Style guide</h1>
        <p className="mt-6 max-w-prose text-lead text-muted">
          The colors, type and components the site is built from. To change
          the brand colors, edit the six values at the top of{" "}
          <code>src/styles/tokens.css</code> and this page updates with the
          rest of the site.
        </p>
      </header>

      <section>
        <h2 className="text-title">Brand palette</h2>
        <ul className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {palette.map((color) => (
            <li key={color.token}>
              <div
                className="aspect-square w-full border border-line"
                style={{ backgroundColor: `var(${color.token})` }}
              />
              <p className="mt-3 text-body font-medium">{color.name}</p>
              <p className="text-small text-muted">{color.use}</p>
              <p className="mt-1 break-all text-small text-muted">
                <code>{color.token}</code>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-title">Tones</h2>
        <p className="mt-4 max-w-prose text-body text-muted">
          A tone is a background with matching text, border and button
          colors. Use it through <code>&lt;Section tone=&quot;...&quot;&gt;</code>.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {tones.map(({ tone, className }) => (
            <div key={tone} className={`${className} border border-line p-8`}>
              <p className="text-small text-muted">
                <code>tone=&quot;{tone}&quot;</code>
              </p>
              <h3 className="mt-2 text-heading">Heading text</h3>
              <p className="mt-2 text-body text-muted">
                Supporting text in the muted color.
              </p>
              <div className="mt-4 w-16 border-t border-accent" />
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/styleguide">Solid button</Button>
                <Button href="/styleguide" variant="outline">
                  Outline button
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-title">Type scale</h2>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {typeScale.map((row) => (
            <li
              key={row.label}
              className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr] sm:items-baseline"
            >
              <code className="text-small text-muted">{row.label}</code>
              <p className={row.className}>{row.sample}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-title">Components</h2>
        <div className="mt-8 grid gap-x-16 gap-y-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3 className="text-heading">Logo</h3>
            <div className="tone-brand mt-4 p-8">
              <Logo />
            </div>
            <h3 className="mt-12 text-heading">Spa menu card</h3>
            <div className="tone-deep mt-4 max-w-md p-6">
              <MenuCard treatment={treatments[0]} />
            </div>
          </div>
          <div>
            <h3 className="text-heading">Arch frame</h3>
            <ArchFrame label="any photo" className="mt-4 max-w-64" />
          </div>
        </div>
      </section>
    </Container>
  );
}
