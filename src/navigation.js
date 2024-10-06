import { Platform } from "react-native";
import {
  createNativeStackNavigator,
  createStackNavigator,
} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from "./screens/OnboardingScreen";
import AuthScreen from "./screens/AuthScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";

const Stack =
  Platform.OS === "web" ? createStackNavigator() : createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="onboard"
          component={OnboardingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="authScreen"
          component={AuthScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="login"
          component={SignInScreen}
          options={{
            title: "",
            headerShadowVisible: false,
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="signUp"
          component={SignUpScreen}
          options={{
            title: "",
            headerShadowVisible: false,
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
