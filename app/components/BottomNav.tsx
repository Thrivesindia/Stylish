import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from "../screens/Home";
import WishlistScreen from "../screens/Wishlist";
import SearchScreen from "../screens/Search";
import SettingsScreen from "../screens/Settings";
import CartScreen from "../components/CartScreen";
import DashboardStack from "../components/DashboardStack";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Dashboard") iconName = "home";
          else if (route.name === "Wishlist") iconName = "heart";
          else if (route.name === "Cart") iconName = "shopping-cart";
          else if (route.name === "Search") iconName = "search";
          else if (route.name === "Settings") iconName = "cog";

          const iconSize = route.name === "Cart" ? size * 1.2 : size;
          const iconColor = route.name === "Cart" ? "#FF0000" : color;

          return <FontAwesome name={iconName} size={iconSize} color={iconColor} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { height: 60, paddingBottom: 5 },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardStack} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomNav;