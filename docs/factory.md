# Running Hadeda through dev-factory

[dev-factory](https://github.com/Nightwolf001/agentic-dev-factory) plans, builds, verifies and ships tasks as draft pull requests. This page is what it needs to know about this repository. Nothing here is required to work on Hadeda by hand.

## What is committed

`.devcontainer/docker-compose.yml` is the API's stack: Node 22, the worktree mounted at `/workspace`, `pnpm install` for the API and the packages it uses, the shared package built, the API running in watch mode on port 3000 with a health check on `GET /health`. `node_modules` lives in named volumes, so the Linux install never touches the Mac's install that Metro uses.

It publishes port 3000 (for a canonical-ports start). A `--ports none` or `--ports direct` start strips that, so several tasks can run this file at once; with `direct` the host reaches each stack at `http://<service>.<project>.orb.local:3000` on OrbStack.

## What is not committed: the factory's settings

dev-factory keeps a project's settings in `.devfactory/config.json`, which is git-ignored on purpose. Create it in your checkout (or run `dev-factory settings set <key> <value> --project` for each value). Then run `dev-factory config validate` and `dev-factory doctor`.

```json
{
	"environment": {
		"type": "compose",
		"composeFile": ".devcontainer/docker-compose.yml",
		"service": "api",
		"pingUrl": "http://localhost:3000/health",
		"webBaseUrl": "http://localhost:3000",
		"readyTimeout": 900,
		"buildFiles": ["pnpm-lock.yaml"]
	},
	"mobile": {
		"appDir": "apps/mobile",
		"metroPort": 8081,
		"install": "pnpm install --frozen-lockfile",
		"pods": null,
		"start": "pnpm exec expo start --port {port}",
		"build": "pnpm exec expo run:ios --device {udid} --port {port}",
		"androidBuild": "pnpm exec expo run:android --device {serial} --port {port}",
		"nativeInputs": ["app.json", "package.json"],
		"androidNativeInputs": ["app.json", "package.json"]
	}
}
```

Not set, and yours to decide: `mobile.appId` (the app's bundle id; `app.json` has none yet, and `expo run:ios` / `run:android` need `ios.bundleIdentifier` and `android.package` before the first native build), `mobile.androidAvd` (the emulator to boot) and `tasks.source` (where tasks live: local files by default).

## Requirements on the machine

Node 22 (`.nvmrc`; a scheduled pass needs it on its `PATH`), a container engine (OrbStack or Docker Desktop), and for the mobile lane an iOS simulator runtime and an Android emulator plus the Maestro CLI.
