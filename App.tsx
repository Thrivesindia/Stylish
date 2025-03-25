import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider, useTheme } from "./app/utils/ThemeProvider";
import HomeScreen from "./app/screens/Home";
import Signup from "./app/screens/signup/signup";
import Signin from "./app/screens/login/login";
import ForgotPasswordScreen from "./app/screens/forgetPassword/forgotpass";

const Stack = createStackNavigator();

function AppNavigator() {
  const { colors } = useTheme();

  return (
    <NavigationContainer theme={{ colors: { background: colors.background } }}>
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forgotpassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}
