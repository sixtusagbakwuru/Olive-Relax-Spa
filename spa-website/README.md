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
  --brand-primary: #1f4a43;       /* header, hero, buttons */
  --brand-primary-deep: #163832;  /* footer */
  --brand-neutral: #eadfcf;       /* alternate section background */
  --brand-neutral-light: #f6f0e6; /* main page background */
  --brand-accent: #b08d57;        /* thin lines and small marks */
  --brand-ink: #15302b;           /* text on light backgrounds */
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

To change typefaces, swap the two font imports in `src/app/layout.tsx`.

## Change the content

| What | File |
| --- | --- |
| Name, phone, address, hours, booking link, WhatsApp | `src/content/site.ts` |
| Treatments, durations and prices | `src/content/treatments.ts` |
| Home page text | `src/app/page.tsx` |

Values in `[square brackets]` are placeholders. The treatments and page text
are sample content to replace with the spa's own.

## Pages

- `/` home
- `/treatments` full treatment menu
- `/contact` hours, address and booking
- `/styleguide` live view of the design system (hidden from search engines)

## Photos

`ArchFrame` shows a labelled placeholder until it is given an image:

```tsx
import Image from "next/image";

<ArchFrame label="treatment room">
  <Image src="/photos/room.jpg" alt="Treatment room" fill className="object-cover" />
</ArchFrame>
```

Put image files in a `public/photos` folder.
