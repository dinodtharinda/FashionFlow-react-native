import { StyleSheet, View, Text } from "react-native";

const AuthScreen = () => {
  return (
    <View styles={styles.rootContainer}>
      <Text>Auth Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

export default AuthScreen;
