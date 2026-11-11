import { useEffect, useState } from 'react';
import { AccessibilityInfo, Image, type ImageStyle, type StyleProp } from 'react-native';
import type { PixelImage } from '@hadeda/assets';
import { motion } from '../theme';

interface Props {
  /** One frame, or several to loop like a sprite. */
  frames: readonly PixelImage[];
  fps?: number;
  /** Extra whole-number scale on top of the 2pt art pixel. */
  scale?: 1 | 2 | 3;
  accessibilityLabel?: string;
  style?: StyleProp<ImageStyle>;
}

/**
 * Draws pixel art at its native point size. Images are pre-scaled with nearest-neighbour
 * (@1x/@2x/@3x), so React Native never has to scale them and they stay crisp.
 * Loops step frame by frame (steps, not easing) and stop under reduced motion.
 */
export function PixelSprite({ frames, fps = motion.spriteFps, scale = 1, accessibilityLabel, style }: Props) {
  const [frame, setFrame] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    AccessibilityInfo.isReduceMotionEnabled().then(setReduceMotion);
    const sub = AccessibilityInfo.addEventListener('reduceMotionChanged', setReduceMotion);
    return () => sub.remove();
  }, []);

  useEffect(() => {
    if (frames.length < 2 || reduceMotion) return;
    const id = setInterval(() => setFrame((f) => (f + 1) % frames.length), 1000 / fps);
    return () => clearInterval(id);
  }, [frames.length, fps, reduceMotion]);

  const current = frames[reduceMotion ? 0 : frame % frames.length];
  return (
    <Image
      source={current.source}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityLabel ? 'image' : undefined}
      style={[{ width: current.width * scale, height: current.height * scale }, style]}
    />
  );
}
