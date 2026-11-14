# Sydney Tsay portfolio site

Plain HTML, CSS and a little JavaScript. No build step. Open `index.html` in a browser to view it.

## Files
- `index.html`: all the content (intro text, education, the 4 projects)
- `styles.css`: layout (12-column grid on desktop, 4-column grid on phones under 760px), type and colours
- `script.js`: optional extras (placeholder for missing images, (Work)/(About) label switch, press G to show the grid)
- `images/photo.jpg`: your portrait
- `images/projects/`: put project images here
- `figma/`: SVG frames to paste into Figma (see below)

## What you need to supply
1. **Project images.** Save them as `images/projects/commons-cafe.jpg`, `out-the-archive.jpg`, `trend-magazine.jpg`, `mix-plus.jpg`.
   They show up automatically. Until a file exists, a grey "[Project image]" box is shown. Images are cropped to a square; to show the whole image, change `object-fit: cover` to `contain` in `styles.css`.
2. **Project captions.** In `index.html`, edit the two lines inside each `<figcaption>` (name, then discipline).
3. **Mix+ number.** Replace `[N] attendees` in the Mix+ caption, or delete that line.
4. **(@sydneytsay) link** goes to instagram.com/sydneytsay (opens in a new tab).
5. Optional: a way to contact you (email, LinkedIn, resume) — the design doesn't have one yet.

To add a project, copy one `<section class="project">…</section>` block.

## Putting it into Figma
**Option A (fastest, already made): SVG frames.** Drag the files in `figma/` onto a Figma canvas
(or File > Import). There's one frame per desktop screen (1440×900: intro + 4 projects) and one full-length 390px mobile frame.
Text is real SVG text set in JetBrains Mono, so install JetBrains Mono (free, Google Fonts) first.
Figma normally turns SVG text into editable text layers, but this hasn't been tried in Figma itself, so check that after import.

**Option B (editable auto-layout-ish layers): html.to.design plugin.** Once the site is online at a public URL
(see Hosting), open the free "html.to.design" plugin in Figma, paste the URL, and pick 1440 and 390 widths.
It rebuilds the page as Figma layers.

## Hosting (pick one)
- **Netlify Drop**: drag the `website` folder onto app.netlify.com/drop. Live in about a minute.
- **GitHub Pages**: put these files in a repo, then Settings > Pages > deploy from main branch.
