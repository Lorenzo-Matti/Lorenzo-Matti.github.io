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
  video/hero.mp4, hero-poster.jpg     ← homepage video and its still frame
  projects/<project-id>/              ← one folder of photos/PDFs per project
src/
  lib/
    data/
      site.ts        ← name, role, links, About text, skills
      projects.ts    ← all projects (edit here only)
    components/      ← Navbar, Hero, ProjectCard, Gallery, Footer
  routes/
    +page.svelte             → /  (hero, about + skills, projects)
    projects/[id]/           → /projects/<id>  (one page per project)
```

## Adding a project

1. Create `static/projects/<project-id>/` and upload the cover, an optional header photo, gallery photos and PDFs.
2. In `src/lib/data/projects.ts`, copy the example block and change the values. Optional fields can be deleted.
3. Commit. A wrong file path fails the build (the live site keeps the previous version).

## Replacing the hero video

Keep it short (6–10 s loop), 1280–1920 px wide, no audio, ideally under 3 MB:

```sh
ffmpeg -i source.mov -an -vf scale=1280:-2,fps=30 -c:v libx264 -crf 30 -preset slow -pix_fmt yuv420p -movflags +faststart static/video/hero.mp4
ffmpeg -i static/video/hero.mp4 -frames:v 1 -q:v 3 static/video/hero-poster.jpg
```

## Deploying to GitHub Pages under a sub-path

Set the base path in `vite.config.ts` → `sveltekit({ ..., paths: { base: process.env.BASE_PATH ?? '' } })`.
All links use `resolve()` and assets use `asset()`, so nothing else changes.
