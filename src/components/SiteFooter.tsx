import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./ui/Container";
import { Logo } from "./ui/Logo";

export function SiteFooter() {
  return (
    <footer className="tone-deep pt-12 pb-6">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Logo />
            <p className="mt-2 text-small tracking-[0.2em] text-muted">
              {site.tagline}
            </p>
            <p className="mt-4 text-small text-muted">
              {site.address.join(", ")}
            </p>
          </div>
          <nav aria-label="Footer" className="flex gap-8 sm:justify-end">
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
        </div>
        <div className="mt-10 flex flex-col gap-x-8 border-t border-line pt-4 text-small text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>
            Website designed by{" "}
            <a
              href={site.credit.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-fg underline decoration-accent underline-offset-4"
            >
              {site.credit.name}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
