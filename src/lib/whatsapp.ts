import { site } from "@/content/site";
import {
  formatPrice,
  type Treatment,
  type TreatmentOption,
} from "@/content/treatments";

/** A wa.me link to the spa's WhatsApp, optionally with a message typed in. */
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const greeting = `Hello ${site.name}, I'd like to book a home treatment.`;

export function treatmentLine(treatment: Treatment, option: TreatmentOption) {
  return `${treatment.name}, ${option.minutes} minutes (${formatPrice(option.price)})`;
}

/** Message used by the "Book" buttons on the spa menu. */
export function menuBookingMessage(treatment: Treatment, option: TreatmentOption) {
  return `${greeting}\n\nTreatment: ${treatmentLine(treatment, option)}\n\nWhen are you available?`;
}

/** Message built from the booking form. */
export function formBookingMessage(details: {
  name: string;
  treatment: string;
  date: string;
  time: string;
  area: string;
  notes: string;
}) {
  const lines = [
    greeting,
    "",
    `Name: ${details.name}`,
    `Treatment: ${details.treatment}`,
    `Date: ${details.date}`,
    `Time: ${details.time}`,
    `Area or address: ${details.area}`,
  ];
  if (details.notes) lines.push(`Notes: ${details.notes}`);
  return lines.join("\n");
}
