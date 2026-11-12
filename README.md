# Dennis & Olena Wedding Website

An invitation website for the wedding on **10 July 2027** at Surf en Beach, Katwijk aan Zee.
Available in three languages: Ukrainian, Dutch and German. It includes an animated envelope
intro, a day programme, a map, a countdown timer, a dress code section and an RSVP form.

**Stack:** React 18 · Vite 5 · Tailwind CSS 4 · framer-motion · lucide-react

---

## Quick start

Requires [Node.js](https://nodejs.org) (LTS).

```bash
npm install      # install dependencies (first time only)
npm run dev      # run the site locally
```

While `vite.config.js` has `base: '/wedding_website/'`, the local address is:
`http://localhost:5173/wedding_website/`

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Builds the production site into `dist/` |
| `npm run preview` | Serves the `dist/` build locally (check before deploying) |
| `npm run lint` | Runs ESLint |
| `npm run deploy` | Builds and publishes to GitHub Pages (`gh-pages`) |

---

## Project structure

```
├── index.html            # Page title, favicon, link previews (Open Graph, Twitter)
├── vite.config.js        # `base` is the path the site is served from
├── public/
│   ├── favicon.svg       # Browser tab icon
│   └── og-image.jpg      # Link preview image (1200×630)
└── src/
    ├── main.jsx          # Entry point
    ├── App.jsx           # Language selection, UA/NL/DE switcher, envelope → site
    ├── Mail.jsx          # Animated envelope
    ├── WeddingSite.jsx   # All site sections and their texts
    ├── Rsvp.jsx          # RSVP form
    ├── CountdownTimer.jsx# Countdown to the wedding
    ├── ScrollReveal.jsx  # Fade-in on scroll
    ├── config.js         # Settings (RSVP deadline)
    ├── index.css         # Tailwind and animations
    └── assets/couple.webp# Couple photo
```

---

## How to change content

| What to change | Where |
|---|---|
| Site texts (story, venue, parking, dress code) | `src/WeddingSite.jsx`, the `translations` object (UA / NL / DE) |
| Day programme (times and titles) | `src/WeddingSite.jsx`, the array in the "PROGRAM" section (`forPartyOnly: true` = evening guests only) |
| Dress code colour palette | `src/WeddingSite.jsx`, the `colors` array |
| **RSVP deadline** | `src/config.js`, the `RSVP_DEADLINE` constant (format `YYYY-MM-DD`). The date in the form is formatted automatically for each language |
| Countdown date and time | `src/WeddingSite.jsx` (`targetDate` on `CountdownTimer`) and the default value in `src/CountdownTimer.jsx` |
| "Add to calendar" link | `src/WeddingSite.jsx`, the `calendar.google.com` link (dates are in UTC) |
| Map and Google Maps button | `src/WeddingSite.jsx`, the `query=` parameter |
| Contact phone numbers | `src/Rsvp.jsx`, the note about the child-free wedding |
| Envelope text | `src/Mail.jsx` |
| Couple photo | replace `src/assets/couple.webp` |
| Link previews in messengers | `index.html` (`og:` and `twitter:` tags) and `public/og-image.jpg` |

> Every text exists in three versions (UA / NL / DE). When you change one, check the others.
> German and Dutch use the informal form of address (du/ihr, je/jullie).

---

## Language

- The language is picked automatically from the guest's browser: `de` → German, `nl` → Dutch, anything else → Ukrainian.
- Guests can switch with the UA / NL / DE buttons in the top-right corner. Switching also updates the page's `lang` attribute.
- Link previews in messengers (the `og:` tags in `index.html`) are static and always contain all three languages, because messengers do not run the site's code.

## Evening-guests version

Add `?type=party` to the link, for example `https://…/?type=party`.
The programme then shows only the evening items, and the wishes field in the form gets a different label.

---

## RSVP

The form submits responses to a **Google Form** (`GOOGLE_FORM_URL` and the `entry.…` field IDs in `src/Rsvp.jsx`). View responses in that Google Form's response sheet.

- The "children" field in the Google Form is always sent as `0` (the wedding is child-free). If you delete that question from the Google Form, also remove the matching `entry.1289813742` line in `Rsvp.jsx`.
- If you create a new Google Form, update `GOOGLE_FORM_URL` and every `entry.…` ID (you can find them with "Get pre-filled link" in Google Forms).

---

## Deployment

### Current setup: GitHub Pages

```bash
npm run deploy
```

The site is published at `https://olena-vdovych.github.io/wedding_website/`.

### Moving to Netlify / Cloudflare Pages / Vercel (nicer address)

1. In `vite.config.js`, change `base: '/wedding_website/'` to `base: '/'`.
2. In `index.html`, replace the addresses in `og:url`, `og:image`, `og:image:secure_url` and `twitter:image` with the new site address. To refresh messenger caches, bump `?v=2` to `?v=3`.
3. Run `npm run build`.
4. Netlify: drag the `dist/` folder onto https://app.netlify.com/drop. Cloudflare Pages / Vercel: connect the GitHub repository (build command `npm run build`, output directory `dist`).
5. A custom domain (for example a `.nl`) is connected in the hosting settings; HTTPS is enabled automatically.
6. The `predeploy` and `deploy` scripts and the `gh-pages` package are no longer needed and can be removed from `package.json`.

---

## Pre-launch checklist

- [ ] All three languages checked on a phone (open the link from a messenger)
- [ ] A test RSVP shows up in the Google Form
- [ ] Phone numbers in the child-free note are correct
- [ ] Link preview looks right in WhatsApp / Telegram / Viber
- [ ] RSVP deadline in `src/config.js` is up to date