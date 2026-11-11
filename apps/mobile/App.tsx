import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { LandingScreen } from './src/screens/LandingScreen';
import { colors, fontsToLoad } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts(fontsToLoad);
  if (!fontsLoaded) return <View style={{ flex: 1, backgroundColor: colors.sky }} />;
  return (
    <>
      <LandingScreen />
      <StatusBar style="dark" />
    </>
  );
}
