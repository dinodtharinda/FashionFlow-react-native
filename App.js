import { StatusBar } from "expo-status-bar";
import Navigation from "./src/navigation";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Navigation />
    </>
  );
}
const styles = StyleSheet.create({

});
