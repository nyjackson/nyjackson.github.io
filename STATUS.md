# STATUS — nyjackson.github.io

Dated first lines (`- YYYY-MM-DD …`) are append-only; correct with an indented continuation
(`  - ✏️ YYYY-MM-DD: …`). Each heading appears exactly once.

This repo carries `STATUS.md` only — no `AGENTS.md` / `CLAUDE.md` (owner, 2026-10-25). Sessions
start from the workspace root, whose `CLAUDE.md` loads the workspace rules.

## Blocked

## Next
- 2026-10-25 — Mobile nav: the links don't collapse at phone width. A UX shape — propose it,
  the owner rules, then build.
- 2026-10-25 — Meta tags: description and Open Graph tags, a real `<title>`. PNG favicon
  fallback (older browsers, iOS home screen) alongside the SVG.
- 2026-10-25 — Clean mock screenshots to replace the employer ones removed in P1 (owner ruling
  2026-10-14); the planned asset-portal demo (workspace#1) can supply them.
- 2026-10-25 — Project cards (`src/constants.ts`): drop the employer name from the
  "S&A Unified Infrastructure Migration" title and the hosting history ("legacy s3fs-mounted
  DigitalOcean environment") from its text; make the migrated-document count match LinkedIn
  (card says 9,950+, LinkedIn 10k+). Content slice, its own branch.
- 2026-10-25 — Contact inputs show focus by a border colour only (`#6D98BA` on the light
  background, under 3:1); the new global focus ring is overridden there by `outline: none`.

## Shipped
- 2026-10-25 — P2 accessibility on `fix/p2-a11y` (PR pending): `<main>` landmark, heading order
  h1 → h2 → h3, theme toggle out of the nav list, `aria-pressed` filters · keyboard focus ring,
  reduced-motion support (typewriter, smooth scroll, hover lift) · light muted text `#6A655C`
  (≥ 4.5:1 on all three backgrounds), faint kept for decoration only · Skills icons fixed size
  (20 px, accent) with the inline styles moved to CSS · skill-card accent top strip and hover
  border now render (a misspelled CSS variable had hidden both) · theme follows the OS until the
  visitor toggles · owner's NJ favicon (transparent, light/dark aware).
  - ✅ 2026-10-25: merged (PR #2, merge commit 77981a2) and deployed; checked on the live site
    after deploy — logo 24 px, skill strip, theme follows the OS until a click, favicon
    `[verified: headless Chrome]`.
- 2026-10-14 — P1: employer screenshots removed, `tsc -b` back in the build, CI lints and builds
  PRs (PR #1, merge commit 482f554).

## Notes / decisions
- 2026-10-25 — Owner rulings: favicon transparent with navy `#003B6F` on light tabs and
  `#6D98BA` on dark · `--color-text-faint` is decoration only; the "Internal Access Only" line
  uses muted · Skills icons 20 px in `--accent-mid` · light muted `#857F74 → #6A655C` · keep
  the skill-card accent top strip (new on the live site: the token typo had always hidden it).
- 2026-10-25 — Portfolio card for the planned asset portal (workspace#1): its own card, worded as
  an independent project exploring the same problems in a new domain; a one-way in-page link
  to the proprietary "Unified Document Scanning Portal" card, which keeps no outbound link.
- 2026-10-14 — Employer screenshots removed now; a history purge (`git filter-repo` +
  force-push) is decided separately — the files remain in the public history.
