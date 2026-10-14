import Link from "next/link";
import { TreatmentList } from "@/components/TreatmentList";
import { VisitDetails } from "@/components/VisitDetails";
import { ArchFrame } from "@/components/ui/ArchFrame";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { bookingHref } from "@/content/site";
import { featuredTreatments } from "@/content/treatments";

const visitSteps = [
  {
    title: "Arrive a little early",
    text: "Come 15 minutes before your booking so you can change and settle in without rushing.",
  },
  {
    title: "Tell us what you need",
    text: "Your therapist asks about pressure, problem areas and anything you would like us to avoid.",
  },
  {
    title: "Your treatment",
    text: "A private room, warm towels and no interruptions for the full length of your booking.",
  },
  {
    title: "Take your time after",
    text: "There is no rush to leave. Rest for a while before you head back out.",
  },
];

export default function HomePage() {
  return (
    <>
      <Section tone="brand">
        <div className="grid items-center gap-x-16 gap-y-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="text-display">Slow down in the middle of Dubai</h1>
            <p className="mt-6 max-w-prose text-lead text-muted">
              Hammam rituals, massage and facials in a calm, private setting.
              Book online, or message us and we will find a time that suits
              you.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={bookingHref}>Book a treatment</Button>
              <Button href="/treatments" variant="outline">
                See the treatment menu
              </Button>
            </div>
          </div>
          <ArchFrame
            label="treatment room or hammam"
            className="mx-auto max-w-80 lg:max-w-96"
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-title">Treatments</h2>
            <p className="mt-4 max-w-prose text-body text-muted">
              A few of the treatments guests book most. Every one can be
              adjusted to what you need on the day.
            </p>
            <Link
              href="/treatments"
              className="mt-6 inline-flex min-h-11 items-center text-body underline decoration-accent underline-offset-4"
            >
              See the full treatment menu
            </Link>
          </div>
          <TreatmentList items={featuredTreatments} />
        </div>
      </Section>

      <Section tone="sand">
        <h2 className="text-title">What to expect on your visit</h2>
        <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {visitSteps.map((step, index) => (
            <li key={step.title} className="border-t border-accent pt-5">
              <p className="font-display text-title text-muted">{index + 1}</p>
              <h3 className="mt-3 text-heading">{step.title}</h3>
              <p className="mt-2 text-body text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="brand" id="visit">
        <h2 className="text-title">Find us</h2>
        <div className="mt-10">
          <VisitDetails />
        </div>
        <div className="mt-12">
          <Button href={bookingHref}>Book a treatment</Button>
        </div>
      </Section>
    </>
  );
}
