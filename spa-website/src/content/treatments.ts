/**
 * The treatment menu. This is sample content: replace it with the spa's
 * real treatments, durations and prices.
 */
export type Treatment = {
  name: string;
  duration: string;
  description: string;
  /** Price in AED, for example "350". */
  price: string;
  /** Show on the home page. */
  featured?: boolean;
};

export type TreatmentGroup = {
  title: string;
  intro: string;
  items: Treatment[];
};

export const treatmentGroups: TreatmentGroup[] = [
  {
    title: "Hammam",
    intro: "Steam, black soap and a full-body scrub, the traditional way.",
    items: [
      {
        name: "Traditional hammam",
        duration: "60 min",
        description:
          "Steam, black soap, a kessa glove scrub and a warm rinse.",
        price: "[Price]",
        featured: true,
      },
      {
        name: "Royal hammam",
        duration: "90 min",
        description:
          "The traditional hammam, followed by a rhassoul clay mask and an argan oil massage.",
        price: "[Price]",
      },
    ],
  },
  {
    title: "Massage",
    intro: "Choose your pressure and the areas you want us to focus on.",
    items: [
      {
        name: "Swedish massage",
        duration: "60 or 90 min",
        description:
          "Long, flowing strokes with light to medium pressure for general relaxation.",
        price: "[Price]",
        featured: true,
      },
      {
        name: "Deep tissue massage",
        duration: "60 or 90 min",
        description:
          "Slow, firm pressure for tight shoulders, back and legs.",
        price: "[Price]",
      },
      {
        name: "Hot stone massage",
        duration: "75 min",
        description:
          "Warm basalt stones and oil to ease muscle tension.",
        price: "[Price]",
        featured: true,
      },
      {
        name: "Couples massage",
        duration: "60 min",
        description: "Two therapists, side by side in a private room.",
        price: "[Price]",
      },
    ],
  },
  {
    title: "Face",
    intro: "Facials matched to your skin on the day.",
    items: [
      {
        name: "Signature facial",
        duration: "60 min",
        description:
          "Cleanse, exfoliation, mask and facial massage.",
        price: "[Price]",
        featured: true,
      },
      {
        name: "Hydrating facial",
        duration: "45 min",
        description:
          "A lighter facial for dry or sun-tired skin.",
        price: "[Price]",
      },
    ],
  },
  {
    title: "Body",
    intro: "Scrubs and wraps that leave skin soft.",
    items: [
      {
        name: "Body scrub and wrap",
        duration: "75 min",
        description:
          "A full-body scrub, then a warm wrap while you rest.",
        price: "[Price]",
      },
    ],
  },
];

export const featuredTreatments = treatmentGroups
  .flatMap((group) => group.items)
  .filter((item) => item.featured);
