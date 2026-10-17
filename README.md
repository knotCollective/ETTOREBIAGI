# Ettore Biagi — bad pure

Personal website for Ettore Biagi (alias badpure) — clarinetist, electroacoustic
performer, artistic researcher, writer, and visual artist.

Built with [Astro](https://astro.build). Static output, deployed to GitHub Pages.

## Layout

- **Left column** — name, alias, and the `about_` biography.
- **Three scroll-down domains** — `audio`, `visual`, `poetry`. Each is an
  independently scrolling column; scrolling reveals the links to its pages.

## Pages

- `audio/interpretation`
- `audio/improvisation`
- `audio/knot-collective`
- `audio/codec-ensemble`
- `visual/hand-drawings`
- `visual/paintings`
- `visual/3d-animation`
- `poetry`

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and deploys it to GitHub Pages. Enable **Settings → Pages → Source → GitHub
Actions** in the repository.

The `base` path in `astro.config.mjs` is set to `/ETTOREBIAGI` for the project
page URL. If a custom domain is used, update `site` and remove `base`.
