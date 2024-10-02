import { StatusBar } from "expo-status-bar";
import Navigation from "./src/navigation";
import { StyleSheet } from "react-native";
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
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}
const styles = StyleSheet.create({});
