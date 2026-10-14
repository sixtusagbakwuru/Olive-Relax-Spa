# Spa website

A Next.js (App Router) and Tailwind CSS v4 site for a spa in Dubai.

## Run it

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000. For a production build: `npm run build` then `npm start`.

## Change the brand colors

Open `src/styles/tokens.css` and edit the six values in section 1:

```css
:root {
  --brand-primary: #5b3a29;       /* coffee: header, hero, buttons */
  --brand-primary-deep: #3b2418;  /* dark coffee: footer */
  --brand-neutral: #efe3d2;       /* latte: alternate section background */
  --brand-neutral-light: #f8f2e9; /* cream: main page background */
  --brand-accent: #d5a04f;        /* gold: logo, buttons on coffee, thin lines */
  --brand-ink: #2e1b11;           /* text on light backgrounds */
}
```

Nothing else needs to change. Muted text, borders, buttons and hover states
are mixed from these six, so they follow automatically. Open `/styleguide`
to see the result on every background at once.

Two things to keep in mind when choosing new colors:

- Keep `primary` and `primary-deep` dark and the two `neutral` values light.
  Text on each is taken from the opposite group, so this keeps it readable.
- The browser tab icon (`src/app/icon.svg`) is a standalone file and cannot
  read the tokens. Update its three hex values by hand.

## How the design system is organised

| Layer | Where | What it holds |
| --- | --- | --- |
| Brand palette | `tokens.css` section 1 | The only hex values in the project |
| Tones | `tokens.css` section 2 | A background plus the text, border and button colors that sit on it: `shell`, `sand`, `brand`, `deep` |
| Tailwind theme | `tokens.css` section 3 | Utility classes: `bg-canvas`, `text-fg`, `text-muted`, `border-line`, `bg-action`, `text-title`, `py-section`, `max-w-page` |
| Components | `src/components/ui` | `Section`, `Container`, `Button`, `ArchFrame`, `Logo` |

Pages never use raw colors. They pick a tone with `<Section tone="brand">`
and everything inside adapts. Tailwind's default palette is switched off, so
classes like `bg-red-500` do not exist here.

To change typefaces, install the new font from `@fontsource`, swap the font
imports in `src/app/layout.tsx`, and update `--font-display` and `--font-body`
in `tokens.css`.

## Change the content

| What | File |
| --- | --- |
| Name, phone, address, hours, booking link, WhatsApp, footer credit | `src/content/site.ts` |
| Photo and video paths and descriptions | `src/content/media.ts` |
| Treatments, durations and prices | `src/content/treatments.ts` |
| Home page text | `src/app/page.tsx` |

Values in `[square brackets]` are placeholders. The treatments and page text
are sample content to replace with the spa's own.

## Pages

- `/` home
- `/treatments` full treatment menu
- `/contact` hours, address and booking
- `/styleguide` live view of the design system (hidden from search engines)

## Logo files

`public/brand` holds the logo as PNG files for use outside the website
(social media, print, WhatsApp). The site itself draws the lotus as code in
`src/components/ui/Logo.tsx`, so it stays sharp and follows the gold token.

## Photos

The photos and video are in `public/media`. They are illustrated stand-ins.
To use the real ones, save each file over the stand-in with the same name:

| File | Where it shows | Suggested size |
| --- | --- | --- |
| `hero.jpg` | Arch at the top of the home page | Portrait, about 1000 x 1400 px |
| `treatments.jpg` | Beside the treatments list | Landscape, about 1600 x 1000 px |
| `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg` | "Inside the spa" arches | Portrait, about 1000 x 1400 px |
| `ambience.mp4` | Background of the video band | Landscape, 1280 x 720 px or larger, H.264, no sound, under 10 seconds and 5 MB |
| `ambience-poster.jpg` | Shown while the video loads | One frame from the video |

Then update the `alt` descriptions in `src/content/media.ts` so they describe
the new photos. If a new file has a different name or type (for example
`hero.webp`), change its path in the same file.

The video plays silently on a loop. Visitors whose device is set to reduce
motion see the poster image instead.
