import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import Button from "../components/Button";
import { GlobalStyles } from "../constants/styles";
import SignOptionItem from "../components/SignOptionItem";

const AuthScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Let's you in</Text>
      <SignOptionItem
        imageUri={
          "https://static.vecteezy.com/system/resources/previews/020/964/386/original/facebook-circle-icon-for-web-design-free-png.png"
        }
        title="Continue with Facebook"
      />
      <SignOptionItem
        imageUri={
          "https://th.bing.com/th/id/OIP.HgH-NjiOdFOrkmwjsZCCfAHaHl?rs=1&pid=ImgDetMain"
        }
        title="Continue with Google"
      />
      <SignOptionItem
        imageUri={
          "https://th.bing.com/th/id/OIP.NnDtoyv66RLHxsF1sYE3AgHaJC?rs=1&pid=ImgDetMain"
        }
        title="Continue with Apple"
      />
      <View style={styles.divider}>
        <View style={styles.dividerItems}></View>
        <Text style={styles.orText}>or</Text>
        <View style={styles.dividerItems}></View>
      </View>

      <Button title="Sign in with password" />
      <View style={styles.chagneSign}>
        <Text style={styles.changeSignText}>Don't have an account?</Text>
        <Text style={styles.changeSignButton} >Sign up</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    marginVertical: 20,
  },
  divider: {
    flexDirection: "row",
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  orText: {
    marginHorizontal: 5,
    fontSize: 15,
    textAlignVertical: "center",
    fontWeight: "500",
    color: GlobalStyles.colors.primary200,
  },
  dividerItems: {
    height: 2,
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary100,
  },
  chagneSign:{
    flexDirection:'row',
    marginVertical:30
  },
  changeSignText:{
    fontSize: 15,
    color: GlobalStyles.colors.primary300,
    marginRight:5
  },
  changeSignButton:{
    fontSize: 15,
    color: GlobalStyles.colors.primary800,
    fontWeight:'bold',
    marginRight:5
  }
});

export default AuthScreen;
