import { StyleSheet, View, Text,} from "react-native";
import Button from "../components/Button";
import { GlobalStyles } from "../constants/styles";
import SignOptionItem from "../components/SignOptionItem";
import { SafeAreaView } from "react-native-safe-area-context";
import DividerText from "../components/UI/DividerText";

const AuthScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
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
     <DividerText text="or"/>

      <Button title="Sign in with password" onPress={()=>navigation.navigate('login')}/>
      <View style={styles.chagneSign}>
        <Text style={styles.changeSignText}>Don't have an account?</Text>
        <Text style={styles.changeSignButton}>Sign up</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal:GlobalStyles.screen.padding
  },
  title: {
    fontSize: 35,
    fontWeight: "500",
    marginVertical: 20,
    fontFamily: GlobalStyles.fontFamily.medium,
  },
 
  chagneSign: {
    flexDirection: "row",
    marginVertical: 30,
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

export default AuthScreen;
