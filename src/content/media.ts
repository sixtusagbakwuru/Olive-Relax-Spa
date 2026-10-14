/**
 * Every photo and video on the site.
 *
 * The files live in public/media. They are illustrated stand-ins: to use the
 * real ones, save your photo or video over the file with the same name (or
 * change the path here) and update the "alt" text to describe the new image.
 *
 * Suggested sizes:
 *   hero, gallery   portrait, about 1000 x 1400 px
 *   treatments      landscape, about 1600 x 1000 px
 *   video           landscape 1280 x 720 px or larger, MP4 (H.264), no sound,
 *                   ideally under 10 seconds and under 5 MB
 */
export const media = {
  hero: {
    src: "/media/hero.jpg",
    alt: "Illustration of arches leading to a lit doorway above a still pool",
  },
  treatments: {
    src: "/media/treatments.jpg",
    alt: "Illustration of stacked stones, a candle, a bowl of water and folded towels",
  },
  gallery: [
    {
      src: "/media/gallery-1.jpg",
      alt: "Illustration of three lit arches reflected in a pool",
    },
    {
      src: "/media/gallery-2.jpg",
      alt: "Illustration of palm trees beside water with dunes behind",
    },
    {
      src: "/media/gallery-3.jpg",
      alt: "Illustration of a bowl of water with petals, seen from above",
    },
  ],
  video: {
    src: "/media/ambience.mp4",
    poster: "/media/ambience-poster.jpg",
  },
};
