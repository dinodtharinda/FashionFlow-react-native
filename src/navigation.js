import { Platform } from "react-native";
import {
  createNativeStackNavigator,
  createStackNavigator,
} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from "./screens/OnboardingScreen";
import AuthScreen from "./screens/AuthScreen";
import LoginScreen from "./screens/LoginScreen";

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
          component={LoginScreen}
          options={{
            title: "",
            headerShadowVisible:false,
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
