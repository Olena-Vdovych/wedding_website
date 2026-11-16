# Dennis & Olena Wedding Website

An invitation website for the wedding on **10 July 2027** at Surf en Beach, Katwijk aan Zee.
Available in three languages: Ukrainian, Dutch and German. It includes an animated envelope
intro, a day programme, a map, travel and accommodation tips, a countdown timer, a dress code
section, an FAQ, a photo-sharing QR code and an RSVP form.

**Stack:** React 18 · Vite 5 · Tailwind CSS 4 · framer-motion · lucide-react · qrcode.react · Cormorant Garamond (self-hosted via `@fontsource`)

---

## Quick start

Requires [Node.js](https://nodejs.org) (LTS).

```bash
npm install      # install dependencies (first time, and after package.json changes)
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
├── index.html            # Title, favicon, noindex, link previews (Open Graph, Twitter)
├── vite.config.js        # `base` is the path the site is served from
├── public/
│   ├── favicon.svg       # Browser tab icon
│   └── og-image.jpg      # Link preview image (1200×630)
└── src/
    ├── main.jsx          # Entry point, loads the fonts
    ├── App.jsx           # Language selection, UA/NL/DE switcher, envelope → site
    ├── Mail.jsx          # Animated envelope
    ├── WeddingSite.jsx   # Main page: hero, story, programme, venue, dress code, gifts…
    ├── Travel.jsx        # "How to get there & where to stay"
    ├── Faq.jsx           # Frequently asked questions (expandable)
    ├── PhotoShare.jsx    # QR code + button for the shared photo album
    ├── CalendarButton.jsx# "Add to calendar" (Google + .ics for Apple/Outlook)
    ├── Rsvp.jsx          # RSVP form (closes automatically after the deadline)
    ├── ContactLinks.jsx  # Clickable phone numbers (from config.js)
    ├── CountdownTimer.jsx# Countdown to the ceremony
    ├── ScrollReveal.jsx  # Fade-in on scroll
    ├── config.js         # Deadline, phone numbers, album link, calendar event
    ├── dates.js          # Deadline formatting / "is it closed?" check
    ├── guest.js          # Reads ?guest=Name from the link
    ├── index.css         # Tailwind, font, focus styles, reduced-motion rules
    └── assets/couple.webp# Couple photo
```

---

## Where to change things

| What to change | Where |
|---|---|
| **RSVP deadline** | `src/config.js` → `RSVP_DEADLINE` (`YYYY-MM-DD`). Shown in every language and closes the form after that day |
| **Phone numbers** | `src/config.js` → `CONTACTS` (shown in the RSVP note, FAQ and travel section) |
| **Photo album link (QR code)** | `src/config.js` → `PHOTO_UPLOAD_URL`. While empty, the photo section and its FAQ entry stay hidden |
| **Calendar event times** | `src/config.js` → `EVENT` (UTC; NL summer time = UTC+2). `startUtc` = guests gather (13:30), `partyStartUtc` = evening guests (19:30), `endUtc` = end (00:00). Event texts are in `src/CalendarButton.jsx` |
| **Day programme (times and titles)** | `src/WeddingSite.jsx`, array in the "PROGRAM" section (`forPartyOnly: true` = evening guests only). If you change times, also update `src/Faq.jsx` ("What time…") and `src/CalendarButton.jsx` descriptions |
| **Countdown target** | `src/WeddingSite.jsx` (`targetDate` on `CountdownTimer`) and the default in `src/CountdownTimer.jsx` |
| Main texts (story, venue, parking, dress code) | `src/WeddingSite.jsx`, the `translations` object (UA / NL / DE) |
| Travel and hotels | `src/Travel.jsx` (check availability and bus info before sending invitations) |
| FAQ questions and answers | `src/Faq.jsx` |
| Dress code colours | `src/WeddingSite.jsx`, the `colors` array |
| Map and Google Maps button | `src/WeddingSite.jsx`, the `query=` parameter |
| Envelope text | `src/Mail.jsx` |
| Couple photo | replace `src/assets/couple.webp` |
| Link previews in messengers | `index.html` (`og:` and `twitter:` tags) and `public/og-image.jpg` |
| Font | `src/main.jsx` (imports) and `src/index.css` (`--font-serif`) |

> Every text exists in three versions (UA / NL / DE). When you change one, check the others.
> German and Dutch use the informal form of address (du/ihr, je/jullie).

---

## Personal links for guests

Add `?guest=Name` to the link. The name appears on the envelope ("For: Name") and is pre-filled in the RSVP form. Spaces can be written as `+` or `%20`.

```
https://YOUR-SITE/?guest=Ivan+Petrenko
https://YOUR-SITE/?guest=Ivan+Petrenko&type=party      ← evening guests
```

To create many links at once, put the names in column A of a Google Sheet and use this formula in B2 (replace the address with the real site address, and use `;` instead of `,` if your Sheets locale requires it):

```
="https://YOUR-SITE/?guest="&ENCODEURL(A2)
="https://YOUR-SITE/?guest="&ENCODEURL(A2)&"&type=party"
```

## Evening-guests version

Add `type=party` (e.g. `?type=party`). The programme shows only the evening items, the "Add to calendar" event starts at 19:30 and the FAQ gives the evening schedule.

---

## RSVP

- Responses go to a **Google Form** (`GOOGLE_FORM_URL` and the `entry.…` IDs in `src/Rsvp.jsx`). View them in that form's response sheet.
- **After the deadline** (`RSVP_DEADLINE`, end of that day on the guest's device) the form is replaced with "Responses are closed" plus the phone numbers. For a hard stop, also switch off "Accepting responses" in the Google Form on that date. To test the closed state, temporarily set the deadline to a past date.
- The "children" field in the Google Form is always sent as `0`. If you delete that question from the Google Form, also remove the matching `entry.1289813742` line in `Rsvp.jsx`.
- If you create a new Google Form, update `GOOGLE_FORM_URL` and every `entry.…` ID ("Get pre-filled link" in Google Forms shows them).

## Photo album and QR code

1. Create a shared album/folder that guests can add photos to, for example a Google Photos shared album (guests need a Google account to add photos), a Dropbox file request (no account needed for uploading) or a Google Drive folder.
2. Open the link in a private/incognito window to confirm that strangers can really upload.
3. Paste the link into `PHOTO_UPLOAD_URL` in `src/config.js`. The site then shows a QR code and an upload button, and the FAQ gets a "Where do I upload photos?" entry.
4. For a printed table card, use the same link in any QR generator (or screenshot the QR code from the site).

## Language

- The language is picked from the guest's browser: `de` → German, `nl` → Dutch, anything else → Ukrainian. Guests can switch with the UA / NL / DE buttons; the page's `lang` attribute follows the choice.
- Link previews in messengers (`og:` tags in `index.html`) are static and mention all three languages, because messengers do not run the site's code.

## Search engines and privacy

`index.html` contains `noindex, nofollow`, so Google and others should not list the site. Link previews in WhatsApp/Telegram/Viber/Facebook still work. Do not add a `robots.txt` that blocks everything: Facebook's link preview respects it and the preview would break.

## Accessibility

- Keyboard: the envelope, language switcher, calendar menu and FAQ work with the keyboard; focus is clearly visible.
- Form fields have proper labels; the language buttons announce which language is active.
- Guests who enabled "reduce motion" in their system get the page without moving animations; everyone else sees the animations as designed.
- Text colours were adjusted for better contrast, and all images and the map have translated descriptions.

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
- [ ] Phone numbers in `src/config.js` are correct
- [ ] Programme times, FAQ answers and calendar event match the final plan
- [ ] Hotel and bus information in `src/Travel.jsx` is still current
- [ ] `PHOTO_UPLOAD_URL` is set and uploading works from a private window
- [ ] Link preview looks right in WhatsApp / Telegram / Viber
- [ ] RSVP deadline in `src/config.js` is up to date