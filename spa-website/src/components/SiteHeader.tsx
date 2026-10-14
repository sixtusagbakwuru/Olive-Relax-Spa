import Link from "next/link";
import { bookingHref, site } from "@/content/site";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Logo } from "./ui/Logo";

export function SiteHeader() {
  return (
    <header className="tone-brand border-b border-line">
      <Container className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-4">
        <Link href="/" aria-label={`${site.name} home`}>
          <Logo />
        </Link>
        <nav
          aria-label="Main"
          className="order-3 flex w-full gap-8 sm:order-none sm:ms-auto sm:w-auto"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center text-body text-muted transition-colors hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button href={bookingHref}>Book a treatment</Button>
      </Container>
    </header>
  );
}
