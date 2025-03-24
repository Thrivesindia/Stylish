import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider, useTheme } from "./app/utils/ThemeProvider";
import HomeScreen from "./app/screens/Home";

const Stack = createStackNavigator();

function AppNavigator() {
  const { colors } = useTheme();

  return (
    <NavigationContainer theme={{ colors: { background: colors.background } }}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
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
