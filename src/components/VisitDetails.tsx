import { site, whatsappHref } from "@/content/site";

/** Opening hours, address and contact details, read from src/content/site.ts. */
export function VisitDetails() {
  return (
    <dl className="grid gap-x-12 gap-y-8 sm:grid-cols-3">
      <div>
        <dt className="font-display text-heading">Opening hours</dt>
        {site.hours.map((row) => (
          <dd key={row.days} className="mt-2 text-body text-muted">
            {row.days}
            <br />
            {row.time}
          </dd>
        ))}
      </div>
      <div>
        <dt className="font-display text-heading">Address</dt>
        <dd className="mt-2 text-body text-muted">
          {site.address.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </dd>
      </div>
      <div>
        <dt className="font-display text-heading">Contact</dt>
        <dd className="mt-2 text-body text-muted">{site.phone}</dd>
        <dd className="text-body text-muted">{site.email}</dd>
        {whatsappHref ? (
          <dd className="mt-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-body underline decoration-accent underline-offset-4"
            >
              Message us on WhatsApp
            </a>
          </dd>
        ) : null}
      </div>
    </dl>
  );
}
