import { StatusBar } from "expo-status-bar";
import Navigation from "./src/navigation";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
     <Navigation/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "#fff",
  },
});
