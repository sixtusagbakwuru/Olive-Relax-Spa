import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./ui/Container";
import { Logo } from "./ui/Logo";

export function SiteFooter() {
  return (
    <footer className="tone-deep py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo />
          <p className="mt-4 text-small text-muted">
            {site.address.join(", ")}
          </p>
        </div>
        <div className="sm:text-end">
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
          <p className="mt-2 text-small text-muted">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
