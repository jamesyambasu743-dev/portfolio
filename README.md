# Portfolio — James Yambasu

Survey researcher and data analyst, Freetown, Sierra Leone.
Live site: https://james-yambasu-portfolio-1.vercel.app

A static site, no build step and no dependencies. Three files:

| File | What it is |
|---|---|
| `index.html` | The page. Layout, styling and rendering logic in one file. |
| `content.js` | Every word on the site. This is the file to edit. |
| `DEPLOY.md` | How to update the site, add images, and publish. |

The site renders itself from the `CONTENT` object in `content.js`, so changing
text never means touching markup. Empty values degrade gracefully: no headshot
path means no photo, an empty gallery list means no gallery section.

Notable sections: a before/after view of a raw survey export against the same
rows cleaned, and a time series chart drawn as inline SVG. The sample rows in
the cleaning panel are invented — no real respondent data appears anywhere in
this repository.

Light and dark themes, keyboard accessible, and a reduced-motion guard.

---

How to edit the site (quick)

- Edit `content.js` — the site is rendered from the `CONTENT` object in that file. Change strings, arrays, and paths there to update text, headings, gallery items, and the headshot.
- Empty or missing values are handled gracefully: no headshot path means no photo and an empty gallery list hides the gallery section.

Preview locally

- Easiest: open `index.html` directly in a browser.
- Serve over HTTP (recommended) from the repo root:
  - Python 3: `python -m http.server 8000`
  - Then visit `http://localhost:8000`.

Deployment

- See `DEPLOY.md` for the publishing workflow (site is published on Vercel at the live URL above).

License & contact

- Consider adding a LICENSE file to make reuse terms explicit (MIT is a common choice for personal sites).
- Contact: https://github.com/jamesyambasu743-dev
