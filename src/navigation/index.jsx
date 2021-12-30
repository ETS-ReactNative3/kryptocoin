import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import HomeScreen from "../screens/HomeScreen";
import CoinDetailedScreen from "../screens/CoinDetailedScreen";
import BottomTabNavigator from "./botomTabNavigator";

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={"Root"} component={BottomTabNavigator} />
      <Stack.Screen
        name={"CoinDetailedScreen"}
        component={CoinDetailedScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
