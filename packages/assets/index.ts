// GENERATED from manifest.json. Static requires so Metro can bundle each image.
// Sizes are in points: 1 art pixel = 2pt (ART_PIXEL in @hadeda/design-tokens).

export interface PixelImage {
  source: number;
  width: number;
  height: number;
  artWidth: number;
  artHeight: number;
}

export const character = {
  hadedaFlapUp: { source: require('./images/character/hadeda-flap-up.png'), width: 168, height: 120, artWidth: 84, artHeight: 60 },
  hadedaGlide: { source: require('./images/character/hadeda-glide.png'), width: 168, height: 120, artWidth: 84, artHeight: 60 },
  hadedaFlapDown: { source: require('./images/character/hadeda-flap-down.png'), width: 168, height: 120, artWidth: 84, artHeight: 60 },
  hadedaBonk: { source: require('./images/character/hadeda-bonk.png'), width: 168, height: 120, artWidth: 84, artHeight: 60 },
  hadedaStanding: { source: require('./images/character/hadeda-standing.png'), width: 168, height: 120, artWidth: 84, artHeight: 60 },
  hadedaFlapSheet: { source: require('./images/character/hadeda-flap-sheet.png'), width: 504, height: 120, artWidth: 252, artHeight: 60 },
} satisfies Record<string, PixelImage>;

export const pickups = {
  grub: { source: require('./images/pickups/grub.png'), width: 22, height: 10, artWidth: 11, artHeight: 5 },
  grubGolden: { source: require('./images/pickups/grub-golden.png'), width: 22, height: 10, artWidth: 11, artHeight: 5 },
} satisfies Record<string, PixelImage>;

export const obstacles = {
  towerTop: { source: require('./images/obstacles/tower-top.png'), width: 86, height: 302, artWidth: 43, artHeight: 151 },
  towerBottom: { source: require('./images/obstacles/tower-bottom.png'), width: 86, height: 320, artWidth: 43, artHeight: 160 },
  lighthouseTop: { source: require('./images/obstacles/lighthouse-top.png'), width: 86, height: 336, artWidth: 43, artHeight: 168 },
  lighthouseBottom: { source: require('./images/obstacles/lighthouse-bottom.png'), width: 86, height: 334, artWidth: 43, artHeight: 167 },
} satisfies Record<string, PixelImage>;

export const scenery = {
  tableMountain: { source: require('./images/scenery/table-mountain.png'), width: 280, height: 110, artWidth: 140, artHeight: 55 },
  lionsHead: { source: require('./images/scenery/lions-head.png'), width: 190, height: 210, artWidth: 95, artHeight: 105 },
  sun: { source: require('./images/scenery/sun.png'), width: 84, height: 84, artWidth: 42, artHeight: 42 },
  cloud: { source: require('./images/scenery/cloud.png'), width: 98, height: 40, artWidth: 49, artHeight: 20 },
  birds: { source: require('./images/scenery/birds.png'), width: 144, height: 36, artWidth: 72, artHeight: 18 },
  palm: { source: require('./images/scenery/palm.png'), width: 96, height: 114, artWidth: 48, artHeight: 57 },
  bokaapHouses: { source: require('./images/scenery/bokaap-houses.png'), width: 340, height: 72, artWidth: 170, artHeight: 36 },
  minaret: { source: require('./images/scenery/minaret.png'), width: 34, height: 100, artWidth: 17, artHeight: 50 },
  lampPost: { source: require('./images/scenery/lamp-post.png'), width: 24, height: 86, artWidth: 12, artHeight: 43 },
} satisfies Record<string, PixelImage>;

export const backgrounds = {
  bgBokaap: { source: require('./images/backgrounds/bg-bokaap.png'), width: 390, height: 844, artWidth: 195, artHeight: 422 },
  bgSeapoint: { source: require('./images/backgrounds/bg-seapoint.png'), width: 390, height: 844, artWidth: 195, artHeight: 422 },
  thumbBokaap: { source: require('./images/backgrounds/thumb-bokaap.png'), width: 280, height: 300, artWidth: 140, artHeight: 150 },
  thumbSeapoint: { source: require('./images/backgrounds/thumb-seapoint.png'), width: 280, height: 300, artWidth: 140, artHeight: 150 },
} satisfies Record<string, PixelImage>;

export const icons = {
  pause: { source: require('./images/icons/pause.png'), width: 12, height: 12, artWidth: 6, artHeight: 6 },
  back: { source: require('./images/icons/back.png'), width: 12, height: 10, artWidth: 6, artHeight: 5 },
  arrow: { source: require('./images/icons/arrow.png'), width: 12, height: 10, artWidth: 6, artHeight: 5 },
  play: { source: require('./images/icons/play.png'), width: 12, height: 14, artWidth: 6, artHeight: 7 },
  close: { source: require('./images/icons/close.png'), width: 12, height: 12, artWidth: 6, artHeight: 6 },
  trophy: { source: require('./images/icons/trophy.png'), width: 12, height: 12, artWidth: 6, artHeight: 6 },
  player: { source: require('./images/icons/player.png'), width: 12, height: 12, artWidth: 6, artHeight: 6 },
  settings: { source: require('./images/icons/settings.png'), width: 12, height: 12, artWidth: 6, artHeight: 6 },
  lock: { source: require('./images/icons/lock.png'), width: 12, height: 12, artWidth: 6, artHeight: 6 },
  mail: { source: require('./images/icons/mail.png'), width: 12, height: 12, artWidth: 6, artHeight: 6 },
  sound: { source: require('./images/icons/sound.png'), width: 14, height: 12, artWidth: 7, artHeight: 6 },
  mute: { source: require('./images/icons/mute.png'), width: 14, height: 12, artWidth: 7, artHeight: 6 },
} satisfies Record<string, PixelImage>;

/** The three-frame flap loop, played at motion.spriteFps. */
export const flapFrames = [character.hadedaFlapUp, character.hadedaGlide, character.hadedaFlapDown] as const;
