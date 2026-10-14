import type { Metadata } from "next";
import { TreatmentList } from "@/components/TreatmentList";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { bookingHref } from "@/content/site";
import { treatmentGroups } from "@/content/treatments";

export const metadata: Metadata = {
  title: "Treatments",
  description: "The full treatment menu, with durations and prices in AED.",
};

export default function TreatmentsPage() {
  return (
    <>
      <Section tone="brand">
        <h1 className="text-display">Treatment menu</h1>
        <p className="mt-6 max-w-prose text-lead text-muted">
          Prices are in AED. If you are not sure what to choose, message us
          and we will help you pick.
        </p>
      </Section>

      <Section>
        <div className="flex flex-col gap-20">
          {treatmentGroups.map((group) => (
            <div
              key={group.title}
              className="grid gap-x-16 gap-y-6 lg:grid-cols-[0.8fr_1.2fr]"
            >
              <div>
                <h2 className="text-title">{group.title}</h2>
                <p className="mt-3 max-w-prose text-body text-muted">
                  {group.intro}
                </p>
              </div>
              <TreatmentList items={group.items} />
            </div>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <h2 className="text-title">Ready to book?</h2>
        <p className="mt-4 max-w-prose text-body text-muted">
          Choose a time online, or message us and we will find one that suits
          you.
        </p>
        <div className="mt-8">
          <Button href={bookingHref}>Book a treatment</Button>
        </div>
      </Section>
    </>
  );
}
