# Portfolio

SvelteKit 3 + Svelte 5 + Tailwind CSS 4, prerendered to static HTML with `adapter-static`.

## Run locally

Requires Node 22+.

```sh
npm install
npm run dev -- --open    # http://localhost:5173
npm run check            # type-check (also verifies every asset path exists)
npm run build && npm run preview
```

## How this was scaffolded

If you prefer to create it from zero instead of using this folder:

```sh
npx sv@1.1.1 create portfolio --template minimal --types ts \
  --add tailwindcss="plugins:typography" sveltekit-adapter="adapter:static" enhanced-img prettier eslint \
  --install npm
```

Then copy `src/` and `static/` from this folder over the generated ones.
Note: in SvelteKit 3 the config lives in `vite.config.ts` (no `svelte.config.js`) and the library alias is `#lib/...`.

## Structure

```
static/
  video/hero.mp4, hero-poster.jpg     ← replace with your video (same names)
  images/projects/*.jpg                        ← one image per project
src/
  lib/
    data/
      projects.ts     ← all projects + Tag list (edit here only)
      site.ts         ← name, role, intro, socials, hero video paths
    components/
      Navbar.svelte  Hero.svelte  ProjectCard.svelte  SectionHeading.svelte  Footer.svelte
  routes/
    +layout.svelte  +layout.ts (prerender)  layout.css (Tailwind + theme tokens)
    +page.svelte              → /
    projects/+page.svelte     → /projects (?tag=TypeScript filter)
```

## Adding a project

1. Drop the image in `static/images/projects/`.
2. Add an entry to `projects` in `src/lib/data/projects.ts`. New tags go in `TAGS` first.
3. `npm run check`: a wrong image path or unknown tag fails here, not in production.

## Replacing the hero video

Keep it short (6–10 s loop), 1280–1920 px wide, no audio, ideally under 3 MB:

```sh
ffmpeg -i source.mov -an -vf scale=1280:-2,fps=30 -c:v libx264 -crf 30 -preset slow -pix_fmt yuv420p -movflags +faststart static/video/hero.mp4
ffmpeg -i static/video/hero.mp4 -frames:v 1 -q:v 3 static/video/hero-poster.jpg
```

## Deploying to GitHub Pages under a sub-path

Set the base path in `vite.config.ts` → `sveltekit({ ..., paths: { base: process.env.BASE_PATH ?? '' } })`.
All links use `resolve()` and assets use `asset()`, so nothing else changes.
