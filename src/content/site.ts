/**
 * Business details used across the site.
 * Replace every value in [square brackets] with the real one.
 */
export const site = {
  name: "Olive Relaxing Spa",
  tagline: "Relax • Renew • Revive",
  description:
    "Hammam rituals, massage and facials in a calm, private setting in Dubai.",

  /** Link to your online booking page (for example your Fresha page).
   *  While this is empty, "Book" buttons lead to the contact page. */
  bookingUrl: "",

  /** WhatsApp number, digits only with country code (for example 9715XXXXXXXX).
   *  While this is empty, the WhatsApp link is hidden. */
  whatsapp: "",

  phone: "[Phone number]",
  email: "[Email address]",
  address: ["[Building and street]", "[Area], Dubai", "United Arab Emirates"],
  hours: [{ days: "[Days open]", time: "[Opening hours]" }],

  /** Shown in the footer as "Website designed by ...". */
  credit: { name: "VeriTechPro", href: "https://veritechpro.com" },

  nav: [
    { label: "Treatments", href: "/treatments" },
    { label: "Contact", href: "/contact" },
  ],
};

export const bookingHref = site.bookingUrl || "/contact";

export const whatsappHref = site.whatsapp
  ? `https://wa.me/${site.whatsapp}`
  : null;
