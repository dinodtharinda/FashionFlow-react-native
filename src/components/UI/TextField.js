import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // or another icon set
import { GlobalStyles } from "../../constants/styles";

const TextField = ({ onChangeText, isObsecure, placeholder, icon }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(isObsecure);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <View style={styles.inputContainer}>
      {icon && (
        <Ionicons name={icon} size={20} color="black" style={styles.icon} />
      )}

      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="gray"
        style={styles.textField}
        secureTextEntry={isPasswordVisible}
        cursorColor="black"
      />
      {isObsecure && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Ionicons
            name={isPasswordVisible ? "eye-off" : "eye"}
            size={20}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary75,
    width: "100%",
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 15,
    height: 60,
  },
  textField: {
    flex: 1,
    color: "black",
    fontSize: GlobalStyles.Dimensions.medium,
    fontFamily: GlobalStyles.fontFamily.medium,
    paddingHorizontal: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
});
