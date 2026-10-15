/**
 * Every photo and video on the site. The files live in public/media.
 *
 * To change one, save the new file over the old one with the same name
 * (or change the path here), and update its "alt" text to describe it.
 *
 * Suggested sizes:
 *   hero video      portrait 600 x 840 px, MP4 (H.264), no sound, under 15 s
 *   gallery         portrait, about 1000 x 1400 px
 *   about photo     landscape, about 1600 x 1000 px
 *   band video      landscape 1280 px wide, MP4 (H.264), no sound, under 15 s
 */
export const media = {
  /** Plays silently inside the arch at the top of the page. */
  hero: {
    video: "/media/hero.mp4",
    poster: "/media/hero.jpg",
  },
  /**
   * Photo above the hero heading (landscape, about 900 x 675 px).
   * Set this to null to hide it.
   */
  heroStill: {
    src: "/media/hero-still.jpg",
    alt: "Amber massage oil bottles on a wooden tray beside soft folded towels",
  } as { src: string; alt: string } | null,
  /** Photo in the About section. */
  treatments: {
    src: "/media/treatments.jpg",
    alt: "A therapist giving a back massage in a bright room with plants",
  },
  gallery: [
    {
      src: "/media/gallery-1.jpg",
      alt: "A therapist gently massaging a client's face",
    },
    {
      src: "/media/gallery-2.jpg",
      alt: "Close-up of a hand massage with oil",
    },
    {
      src: "/media/gallery-3.jpg",
      alt: "A therapist giving a back massage in warm light",
    },
  ],
  /** Background of the "Self care comes home" band. */
  video: {
    src: "/media/ambience.mp4",
    poster: "/media/ambience-poster.jpg",
  },
};
