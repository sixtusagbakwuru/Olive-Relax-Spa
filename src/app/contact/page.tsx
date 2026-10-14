import type { Metadata } from "next";
import { VisitDetails } from "@/components/VisitDetails";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { site, whatsappHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Opening hours, address and how to book.",
};

export default function ContactPage() {
  return (
    <>
      <Section tone="brand">
        <h1 className="text-display">Contact and booking</h1>
        <p className="mt-6 max-w-prose text-lead text-muted">
          Call, email or message us to book, or to ask about a treatment
          before you come in.
        </p>
        {site.bookingUrl || whatsappHref ? (
          <div className="mt-10 flex flex-wrap gap-4">
            {site.bookingUrl ? (
              <Button href={site.bookingUrl}>Book online</Button>
            ) : null}
            {whatsappHref ? (
              <Button href={whatsappHref} variant="outline">
                Message us on WhatsApp
              </Button>
            ) : null}
          </div>
        ) : null}
      </Section>

      <Section>
        <VisitDetails />
      </Section>
    </>
  );
}
