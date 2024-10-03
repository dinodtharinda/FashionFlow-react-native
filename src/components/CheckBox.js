import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const CheckBox = ({
  toggle = (value) => {},
  color = "black",
  size = 20,
  radius = 6,
}) => {
  const [checked, setInChecked] = useState(false);
  return (
    <Pressable
      style={styles.outerContainer}
      onPress={() => {
        setInChecked(!checked);
        toggle(!checked);
      }}
    >
      <View
        style={[
          styles.checkboxBase,
          {
            borderColor: color,
            width: size + 4,
            height: size + 4,
            borderRadius: radius,
          },
          checked && { backgroundColor: color },
        ]}
      >
        {checked && <Ionicons name="checkmark" size={size - 2} color="white" />}
      </View>
    </Pressable>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  outerContainer: {
    padding:10
  },
  checkboxBase: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2.5,
    backgroundColor: "transparent",
  },
});
