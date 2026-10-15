import { site } from "@/content/site";
import { greeting, whatsappLink } from "@/lib/whatsapp";

/** Hours, service area and contact details, read from src/content/site.ts. */
export function ContactDetails() {
  return (
    <dl className="flex flex-col gap-8">
      <div>
        <dt className="font-display text-heading">WhatsApp and phone</dt>
        <dd className="mt-2 text-body text-muted">
          <a
            href={whatsappLink(greeting)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center text-fg underline decoration-accent underline-offset-4"
          >
            {site.phone}
          </a>
        </dd>
        <dd className="text-body text-muted">{site.email}</dd>
      </div>
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
        <dt className="font-display text-heading">Where we come to you</dt>
        <dd className="mt-2 text-body text-muted">{site.serviceArea}</dd>
      </div>
    </dl>
  );
}
