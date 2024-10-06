import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import CheckBox from "../components/CheckBox";
import { useState } from "react";
import Button from "../components/Button";
import DividerText from "../components/UI/DividerText";
import TextField from "../components/UI/TextField";
import SignOptionItem from "../components/SignOptionItem";
import OptionTextButton from "../components/UI/OptionTextButton";

const SignUpScreen = ({navigation}) => {
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
      <Text style={styles.title}>Create Your Account</Text>
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

      <Button onPress={test} title="Sign up" />
      <DividerText text="or continue with" />
      <View style={styles.signOptions}>
        <SignOptionItem
          imageUri={
            "https://static.vecteezy.com/system/resources/previews/020/964/386/original/facebook-circle-icon-for-web-design-free-png.png"
          }
        />
        <SignOptionItem
          imageUri={
            "https://th.bing.com/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?rs=1&pid=ImgDetMain"
          }
        />
        <SignOptionItem
          imageUri={
            "https://th.bing.com/th/id/OIP.NnDtoyv66RLHxsF1sYE3AgHaJC?rs=1&pid=ImgDetMain"
          }
        />
      </View>
      <OptionTextButton
        optionText="Already have an account?"
        buttonText="Sign in"
        onPress={()=>navigation.navigate('login')}
      />
    </View>
  );
};

export default SignUpScreen;

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
  signOptions: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-around",
  },
});
