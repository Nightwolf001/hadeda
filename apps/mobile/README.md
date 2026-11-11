# @hadeda/mobile

The game: Expo SDK 58 / React Native 0.88, TypeScript.

## Run

```bash
pnpm install            # from the repo root
pnpm mobile             # expo start
```

Add packages with `npx expo install <package>` (not `pnpm add`) so versions match the SDK. Read `AGENTS.md` before touching Expo APIs: they change every SDK.

## Structure

```
App.tsx                  font loading, then the first screen
src/theme/               re-exports @hadeda/design-tokens + the font files
src/components/          PixelSprite (crisp pixel art, stepped sprite loops)
src/screens/             LandingScreen (scaffold check; sign-in comes next)
```

## Design rules that matter in code

- Colours, type, spacing and radii come from `@hadeda/design-tokens`. Don't hard-code hex values.
- Pixel art comes from `@hadeda/assets` and is drawn at its own size (1 art pixel = 2pt). Never stretch it with flex; scale by whole numbers only.
- UI motion uses the curves in `motion`; anything in the game world steps at `motion.spriteFps`.
- Respect reduced motion: `PixelSprite` already does.

App identifiers (`ios.bundleIdentifier`, `android.package`) aren't set yet. Add them in `app.json` before the first native build.
