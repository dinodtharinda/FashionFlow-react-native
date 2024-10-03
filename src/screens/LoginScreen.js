import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import CheckBox from "../components/CheckBox";
import { useState } from "react";
import Button from "../components/Button";
import DividerText from "../components/UI/DividerText";
import TextField from "../components/UI/TextField";

const LoginScreen = () => {
  const [check, setCheck] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const test = () => {
    console.log(check);
    console.log(email);
    console.log(password);
  };

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Login to Your Account</Text>
      <View style={styles.textFieldContainer}>
        <TextField
          icon="mail"
          placeholder="Email"
          onChangeText={(value) => setEmail(value)}
        />
        <TextField
          icon="lock-closed"
          placeholder="Password"
          isObsecure={true}
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      <View style={styles.rememberContainer}>
        <CheckBox toggle={(value) => setCheck(value)} size={16} />
        <Text style={styles.rememberText}>Remember me</Text>
      </View>

      <Button onPress={test} title="Login" />
      <DividerText text="or continue with" />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: GlobalStyles.screen.padding,
  },
  title: {
    fontSize: 28,
    marginVertical: 20,
    fontFamily: GlobalStyles.fontFamily.medium,
  },
  textFieldContainer: {
    width: "100%",
  },
  rememberContainer: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rememberText: {
    fontSize: GlobalStyles.Dimensions.small,
    fontFamily: GlobalStyles.fontFamily.medium,
  },
});
