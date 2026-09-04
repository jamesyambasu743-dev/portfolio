# James Yambasu — portfolio

## What's in the folder

```
index.html                  the page (layout, styling, all the logic)
content.js                  every word on the site — this is the file you edit
James_Yambasu_Resume.pdf    the CV the "Download CV" button serves
images/                     your photos and screenshots (create this yourself)
```

You should almost never need to open `index.html`. Text, links, jobs, bounty
wins, sample data — all of it lives in `content.js`.

---

## Adding your headshot

1. Create a folder called `images` next to `index.html`.
2. Put your photo in it, e.g. `images/james.jpg`. Square crops look best,
   around 600×600 pixels. Keep it under about 300 KB.
3. In `content.js`, find the `images:` block near the top and set the path:

```js
images: {
  headshot: "images/james.jpg",
  headshotAlt: "James Yambasu",
  resume: "James_Yambasu_Resume.pdf"
},
```

Leave `headshot: ""` and the hero simply renders without a photo — nothing
breaks, and there is no empty box.

## Adding screenshots of your work

Find the `gallery:` block in `content.js` and add one entry per image:

```js
gallery: {
  heading: "From the work",
  note: "Client and respondent details removed.",
  items: [
    { src: "images/kobo-form.png",  alt: "XLSForm in KoboToolbox",
      caption: "The survey instrument, mid-audit." },
    { src: "images/cleaned-sheet.png", alt: "Cleaned Excel workbook",
      caption: "132 responses after standardising districts and dates." }
  ]
}
```

The gallery section stays hidden while `items` is empty, so add them whenever
you're ready.

**Before you upload any screenshot:** blur or replace respondent names, phone
numbers, GPS coordinates and any client logo you don't have permission to show.
A screenshot with a real phone number in it is a data protection problem, not a
portfolio piece. If in doubt, retype a few dummy rows into a blank sheet and
screenshot that instead.

---

## Publishing an update

This repository is the source of truth. Vercel rebuilds the site every time you
commit here.

1. Click the file you want to change (usually `content.js`).
2. Click the pencil icon.
3. Make your edit.
4. Click **Commit changes**.

Give Vercel about thirty seconds, then hard-refresh the site
(Ctrl+Shift+R, or Cmd+Shift+R on a Mac).

To add images or the CV: **Add file → Upload files**, drag them in, commit.

### Connecting this repo to Vercel (one time)

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard).
2. Open the `james-yambasu-portfolio-1` project → **Settings → Git →
   Connect Git Repository** → choose `jamesyambasu743-dev/portfolio`.
3. If that project can't be connected, create a new project from the repo
   instead, then move the domain across in **Settings → Domains** so the URL
   on your Learn2Earn profile keeps working.

---

## Checking it before you publish

Open `index.html` in your browser by double-clicking it. Everything works
locally except the web fonts, so the typefaces will look slightly different
offline — that's expected and fixes itself once deployed.

Worth checking each time:

- the theme toggle in the top right switches light and dark
- the **Download CV** button opens your PDF (the file has to be in the repo)
- the **Raw export / After cleaning** toggle switches the table
- the chart draws, and hovering a point shows the reading
- narrow the browser window to phone width and confirm nothing spills sideways

