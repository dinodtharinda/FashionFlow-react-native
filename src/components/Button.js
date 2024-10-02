import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

const Button = ({ onPress, title }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "grey" }}
        style={({ pressed }) => [styles.button, pressed]}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 100,
    overflow: "hidden",
  },
  button: {
    backgroundColor: "black",
    padding: 17,
    alignItems: "center",
  },
  buttonText: {
    fontSize:GlobalStyles.Dimensions.small,
    color: "white",
    fontWeight: "500",
    fontFamily:GlobalStyles.fonts.regular
  },
});

export default Button;
