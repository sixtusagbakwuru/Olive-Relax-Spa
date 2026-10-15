import { site } from "@/content/site";
import { Container } from "./ui/Container";
import { Logo } from "./ui/Logo";

export function SiteFooter() {
  return (
    <footer className="tone-deep pt-12 pb-8">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Logo />
            <p className="mt-2 text-small tracking-[0.2em] text-muted">{site.tagline}</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-8">
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
        </div>
        <p className="mt-10 border-t border-line pt-6 text-small text-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
      </Container>
    </footer>
  );
}
