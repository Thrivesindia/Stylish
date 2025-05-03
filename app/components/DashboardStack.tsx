import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import ProductListScreen from '../screens/ProductListScreen';
import PaymentSuccess from '../screens/PaymentSuccess';
import ProductDetailScreen from './ProductDetailScreen';
import CartScreen from './CartScreen';
import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const DashboardStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ProductList" component={ProductListScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Checkout" component={PaymentSuccess} options={{ headerShown: true }} />
      
    </Stack.Navigator>
  );
};

export default DashboardStack;