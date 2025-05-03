import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider, useTheme } from "./app/utils/ThemeProvider";
import Signup from "./app/screens/signup/signup";
import Signin from "./app/screens/login/login";
import ForgotPasswordScreen from "./app/screens/forgetPassword/forgotpass";
import BottomNav from "./app/components/BottomNav";
import { CartProvider } from "./app/cart/CartContext";

const Stack = createStackNavigator();

function AuthNavigator() {
  const { colors } = useTheme();

  return (
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
        name="Forgotpassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={BottomNav}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </CartProvider>
    </ThemeProvider>
  );
}