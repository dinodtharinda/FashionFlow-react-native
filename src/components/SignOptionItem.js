import { Image, Pressable, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../constants/styles";

const SignOptionItem = ({ title, imageUri, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.signOptionContainer,
        pressed && styles.pressed,
      ]}
    >
      <Image
        style={styles.signOptionImage}
        source={{
          uri: imageUri,
        }}
      />
      <Text style={styles.signOptionName}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  signOptionContainer: {
    flexDirection: "row",
    borderWidth: 2,
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: GlobalStyles.colors.primary100,
    marginBottom: 10,
  },
  pressed: {
    opacity: 0.5,
    transform: [{ scale: 1.02 ,}],
  },
  signOptionImage: {
    width: 22,
    height: 22,
    marginRight: 10,
    objectFit: "scale-down",
  },
  signOptionName: {
    fontSize: GlobalStyles.Dimensions.regular,
    fontWeight: "500",
    fontFamily:GlobalStyles.fontFamily.medium
  },
});

export default SignOptionItem;
