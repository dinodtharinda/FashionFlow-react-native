import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const DividerText = ({text}) => {
  return (
    <View style={styles.divider}>
      <View style={styles.dividerItems}></View>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.dividerItems}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
   flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  text: {
    marginHorizontal: 5,
    fontSize: 15,
    textAlignVertical: "center",
    fontWeight: "500",
    color: GlobalStyles.colors.primary200,
    fontFamily: GlobalStyles.fontFamily.medium,
  },
  dividerItems: {
    height: 2,
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary100,
  },
});

export default DividerText;
