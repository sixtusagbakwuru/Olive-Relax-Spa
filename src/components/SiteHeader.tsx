"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { CloseIcon, MenuIcon } from "./ui/Icons";
import { Logo } from "./ui/Logo";

/**
 * Sticky header. It darkens once the page scrolls, and on small screens
 * the section links move into a menu opened by a button.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-500",
        scrolled || open ? "tone-deep border-line" : "tone-brand border-transparent",
      )}
    >
      <Container className="flex items-center justify-between gap-6 py-3">
        <a href="/#top" aria-label={`${site.name}, back to top`} onClick={close}>
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center text-body text-muted transition-colors duration-300 hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <Button href="/#book">Book now</Button>
          </span>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center text-fg lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      <div id="mobile-nav" hidden={!open} className="border-t border-line lg:hidden">
        <Container className="py-4">
          <nav aria-label="Mobile">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="flex min-h-12 items-center font-display text-heading text-fg transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 sm:hidden" onClick={close}>
            <Button href="/#book" className="w-full">
              Book now
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
