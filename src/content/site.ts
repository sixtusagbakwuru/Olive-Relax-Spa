/**
 * Business details used across the site.
 * Replace every value in [square brackets] with the real one.
 */
const city = "Dubai and Sharjah";

export const site = {
  name: "Olive Relaxing Spa",
  tagline: "Relax • Renew • Revive",
  city,
  description: `Thai oil, deep tissue and couple massage at your home in ${city}. Book on WhatsApp.`,

  /** WhatsApp number used for every booking link: digits only, with country code. */
  whatsapp: "971586172322",
  /** The same number, written the way visitors should read it. */
  phone: "+971 58 617 2322",
  email: "oliverelaxationspa@gmail.com",

  /** Where the therapists travel to. */
  serviceArea: city,
  hours: [{ days: "Monday to Sunday", time: "24 hours, home spa treatments" }],

  /** Header and footer links. Each one jumps to a section of the home page. */
  nav: [
    { label: "About", href: "/#about" },
    { label: "Spa menu", href: "/#menu" },
    { label: "How it works", href: "/#how" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Contact", href: "/#contact" },
  ],
};
