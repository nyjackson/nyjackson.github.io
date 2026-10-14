# nyjackson.github.io

Personal portfolio — React 19 + TypeScript + Vite, deployed to GitHub Pages by
`.github/workflows/deploy-gh-pages.yaml` (lint + type check + build on every pull request;
deploy on push to `main`).

```zsh
npm ci          # install exactly what package-lock.json pins
npm run dev     # local dev server
npm run lint    # ESLint
npm run build   # type check (tsc -b) + production build into dist/
```

Content lives in `src/constants.ts`. Anything in `public/` is published as-is, linked or not.
