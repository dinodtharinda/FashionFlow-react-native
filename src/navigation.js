import { Platform } from "react-native";
import {
  createNativeStackNavigator,
  createStackNavigator,
} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from "./screens/OnboardingScreen";
import AuthScreen from "./screens/AuthScreen";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
