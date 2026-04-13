# Tech Note

Personal static learning notes app for React, Next.js, and JavaScript.

It is built with Next.js App Router, MDX, Tailwind CSS, and Shiki, and it is designed to work as a fully static site. The app includes:

- 3 learning tracks: React, Next.js, and JavaScript
- local progress tracking with `localStorage`
- MDX lesson pages with callouts, quizzes, and mark-done actions
- topic-specific live previews for interactive concepts
- static export support for Vercel or GitHub Pages

## Tech stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- `next-mdx-remote`
- Shiki

## Local development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

Create the static export:

```bash
npm run build
```

The generated site is written to `out/`.

## Project structure

```txt
content/
  react/          React lesson MDX files
  nextjs/         Next.js lesson MDX files
  javascript/     JavaScript lesson MDX files

src/
  app/            App Router pages and layout
  components/
    layout/       Sidebar, top bar, split pane
    mdx/          MDX UI components and lesson previews
    ui/           Small shared UI pieces
  lib/            Topics manifest, MDX loading, progress helpers
  types/          Shared types
```

## Learning model

Each topic page is driven by:

- `src/lib/topics.ts` for track structure and metadata
- `content/**.mdx` for lesson content
- `src/components/mdx/previews/*` for live interactive demos

Progress is stored in the browser only. There is no backend or database.

## Deployment to GitHub Pages

This repo includes a GitHub Actions workflow that:

1. installs dependencies
2. builds the static export
3. uploads `out/`
4. deploys to GitHub Pages

The Next.js config automatically applies the correct `basePath` when the site is built in GitHub Actions for a project Pages URL like:

```txt
https://maheshnd.github.io/tech-note/
```

### One-time GitHub Pages setup

In the GitHub repository:

1. Go to `Settings`
2. Open `Pages`
3. Set `Source` to `GitHub Actions`

After that, every push to `main` will deploy the latest static build.

## Notes

- `out/` is generated build output and should not be committed manually
- the app is static-only by design
- progress is per-browser because it uses `localStorage`

## Scripts

```bash
npm run dev
npm run build
npm run start
```
