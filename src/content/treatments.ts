/**
 * The spa menu: home service treatments, lengths and prices in AED.
 * Prices are taken from the Home Services price list.
 */
export type TreatmentOption = {
  minutes: number;
  /** Price in AED. */
  price: number;
};

export type Treatment = {
  id: string;
  name: string;
  description: string;
  options: TreatmentOption[];
};

export const treatments: Treatment[] = [
  {
    id: "thai-oil",
    name: "Thai oil treatment",
    description:
      "A full-body massage that combines Thai pressure and stretching techniques with warm oil.",
    options: [
      { minutes: 60, price: 400 },
      { minutes: 90, price: 500 },
      { minutes: 120, price: 700 },
    ],
  },
  {
    id: "deep-tissue",
    name: "Deep tissue treatment",
    description:
      "Slow, firm pressure that works into tight muscles in the back, shoulders and legs.",
    options: [
      { minutes: 60, price: 400 },
      { minutes: 90, price: 500 },
      { minutes: 120, price: 700 },
    ],
  },
  {
    id: "couple",
    name: "Couple treatment",
    description:
      "Two people treated at the same time, side by side, each with their own therapist.",
    options: [
      { minutes: 60, price: 800 },
      { minutes: 90, price: 1000 },
      { minutes: 120, price: 1400 },
    ],
  },
];

export const lowestPrice = Math.min(
  ...treatments.flatMap((t) => t.options.map((o) => o.price)),
);

export function formatPrice(price: number) {
  return `AED ${price.toLocaleString("en-US")}`;
}
