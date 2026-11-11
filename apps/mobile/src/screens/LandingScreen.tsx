import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { backgrounds, flapFrames } from '@hadeda/assets';
import { STAGES } from '@hadeda/shared';
import { PixelSprite } from '../components/PixelSprite';
import { colors, radius, spacing, text } from '../theme';

/**
 * First screen of the scaffold: proves the tokens, fonts, pixel assets and shared
 * package all wire up. Sign-in (Apple, Google, magic link) replaces the stage list next.
 */
export function LandingScreen() {
  return (
    <View style={styles.root}>
      <View style={styles.hero}>
        <PixelSprite frames={[backgrounds.bgBokaap]} style={StyleSheet.absoluteFill} />
        <PixelSprite frames={flapFrames} accessibilityLabel="The hadeda, flapping" style={styles.bird} />
      </View>
      <ScrollView style={styles.sheet} contentContainerStyle={styles.sheetContent}>
        <Text style={[text.label, styles.subtle]}>Cape Town</Text>
        <Text style={styles.wordmark}>hadeda</Text>
        <Text style={[text.body, styles.muted]}>
          Cape Town's loudest local takes to the sky. Six stages, one day, roost to roost.
        </Text>
        {STAGES.map((s) => (
          <View key={s.id} style={styles.stageRow}>
            <Text style={[text.label, styles.subtle]}>Stage {String(s.number).padStart(2, '0')}</Text>
            <Text style={text.title}>{s.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.sky },
  hero: { height: 360, overflow: 'hidden', alignItems: 'center', justifyContent: 'center' },
  bird: { marginTop: -40 },
  sheet: {
    flex: 1,
    marginTop: -spacing.space8,
    backgroundColor: colors.cream,
    borderTopLeftRadius: radius.radiusSheet,
    borderTopRightRadius: radius.radiusSheet,
  },
  sheetContent: { padding: spacing.space6, gap: spacing.space3 },
  // The full 160pt display size is for posters; on a phone the wordmark uses display-l.
  wordmark: { ...text.displayL, color: colors.ink },
  muted: { color: colors.inkMuted },
  subtle: { color: colors.inkSubtle },
  stageRow: {
    paddingTop: spacing.space3,
    borderTopWidth: 1.5,
    borderTopColor: colors.hairline,
    gap: spacing.space1,
  },
});
