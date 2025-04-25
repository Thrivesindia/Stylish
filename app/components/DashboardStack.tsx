import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailScreen from "../components/ProductDetailScreen";
import CartScreen from "../components/CartScreen";
import { RootStackParamList } from "../types"; 

const Stack = createNativeStackNavigator<RootStackParamList>();

const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductList" component={ProductListScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
};

export default DashboardStack;
