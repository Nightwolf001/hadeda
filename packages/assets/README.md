# @hadeda/assets

Pixel art for the game, exported from the [Hadeda Design System](https://claude.ai/artifact/9CioMoPduhMGkT2doc7LL8).

- `images/<group>/<name>.png` (+ `@2x`, `@3x`): pre-scaled with nearest-neighbour so React Native's `<Image>` stays crisp. 1 art pixel = 2pt.
- `source/<group>/<name>.png`: 1 art pixel = 1 image pixel, for a game renderer (e.g. Skia) that scales with nearest-neighbour filtering itself.
- `manifest.json`: art and point sizes for every image.

Groups: `character` (flap loop, bonk, standing, flap sheet), `pickups` (grub, golden grub), `obstacles` (Bo-Kaap tower, lighthouse; top and bottom), `scenery` (landmarks), `backgrounds` (full stages and card thumbnails), `icons`.

Palette: every pixel uses the 12 mural colours plus the character colours in `@hadeda/design-tokens`.
