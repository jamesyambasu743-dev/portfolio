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
