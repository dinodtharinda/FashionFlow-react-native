import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const OptionTextButton = ({ optionText, buttonText, onPress }) => {
  return (
    <View style={styles.chagneSign}>
      <Text style={styles.changeSignText}>{optionText}</Text>
      <Pressable onPress={onPress}>
        <Text style={styles.changeSignButton}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

export default OptionTextButton;

const styles = StyleSheet.create({
  chagneSign: {
    flexDirection: "row",
    marginVertical: 20,
  },
  changeSignText: {
    fontSize: GlobalStyles.Dimensions.regular,
    color: GlobalStyles.colors.primary300,
    marginRight: 5,
    fontFamily: GlobalStyles.fontFamily.regular,
  },
  changeSignButton: {
    fontSize: GlobalStyles.Dimensions.regular,
    color: GlobalStyles.colors.primary800,
    fontWeight: "bold",
    marginRight: 5,
    fontFamily: GlobalStyles.fontFamily.medium,
  },
});
