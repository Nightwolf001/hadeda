# @hadeda/api

The Hadeda backend: NestJS 12 (ESM, Vitest). It serves the mobile app.

## Run

```bash
pnpm install              # from the repo root
pnpm build:packages       # builds @hadeda/shared, which the API imports
pnpm api                  # nest start --watch on :3000
```

## Endpoints today

| Method | Path | Returns |
| --- | --- | --- |
| GET | `/health` | `{ status: "ok" }` |
| GET | `/stages` | the six stages, in day order |
| GET | `/stages/:id` | one stage |

## Planned modules

| Module | Does | Shared types |
| --- | --- | --- |
| `auth` | Sign in with Apple, Google or an email magic link. Login is required to play. | `Player` |
| `players` | Username, profile, friends. | `Player` |
| `runs` | Accepts a finished run when the hadeda bonks. Validate before it counts. | `RunSubmission` |
| `leaderboards` | Global, weekly and friends boards per stage. Weekly resets Monday 00:00 Africa/Johannesburg. | `Leaderboard`, `LeaderboardEntry`, `WEEKLY_RESET` |

Request and response shapes live in `packages/shared` so the app and API can't drift apart. See `AGENTS.md` for Nest's first-party packages (auth, config, throttling, scheduling) before adding libraries.
