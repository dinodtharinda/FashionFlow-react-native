import { StatusBar } from "expo-status-bar";
import Navigation from "./src/navigation";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { AppInitilize } from "./src/constants/initialize";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts(AppInitilize.fontInitilize);

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; 
  }


  return (
    <>
      <StatusBar style="light" />
      <Navigation />
    </>
  );
}
const styles = StyleSheet.create({});
