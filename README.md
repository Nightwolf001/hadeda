# Hadeda

One day in Cape Town, flown by its loudest local. A one-tap mobile flapper where you are the hadeda ibis, flying through real Cape Town places from dawn to dusk. Login is required to play; scores and leaderboards live on the account.

## Repo layout

```
apps/
  mobile/            Expo SDK 58 / React Native app (the game)
  api/               NestJS 12 API: auth, players, runs, leaderboards
packages/
  design-tokens/     colours, type, spacing, radii, motion — generated from the design system
  assets/            pixel art: hadeda sprite, grubs, obstacles, scenery, backgrounds, icons
  shared/            types and constants shared by app and API (stages, runs, leaderboards)
docs/                links to the design canvas, design system and game design document
```

pnpm workspaces; Node 22 (`.nvmrc`).

## Getting started

```bash
corepack enable          # gives you the pinned pnpm
pnpm install             # also builds packages/shared and packages/design-tokens
pnpm api                 # API on :3000  (GET /health, GET /stages)
pnpm mobile              # Expo dev server
```

Other scripts: `pnpm typecheck`, `pnpm test`, `pnpm tokens` (regenerate the theme after updating `packages/design-tokens/tokens.json`).

## How the pieces connect

- **Design → code.** The [Hadeda Design System](https://claude.ai/artifact/9CioMoPduhMGkT2doc7LL8) is the source of truth. Its `tokens.json` lives in `packages/design-tokens`; `pnpm tokens` turns it into a typed theme the app imports. Its pixel assets live in `packages/assets`, pre-scaled so React Native draws them crisp.
- **App ↔ API.** Request and response shapes (`RunSubmission`, `Leaderboard`, `Stage` …) are defined once in `packages/shared` and imported by both sides.

## Status

Scaffold. The API serves health and stage data; the app renders a landing screen from the tokens, fonts and assets. Next up: sign-in, the game loop, run submission and leaderboards. See `apps/api/README.md` and `apps/mobile/README.md`.

## License

MIT
