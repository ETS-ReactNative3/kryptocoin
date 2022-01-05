import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import CoinDetailedScreen from "../screens/CoinDetailedScreen";
import BottomTabNavigator from "./botomTabNavigator";
import AddNewAssetScreen from "../screens/AddNewAssetScreen";

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Root" options={{ headerShown: false }}>
      <Stack.Screen
        name={"Root"}
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"CoinDetailedScreen"}
        component={CoinDetailedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"AddNewAssetScreen"}
        component={AddNewAssetScreen}
        options={{
          title: "Add New Asset",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 14,
          },
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
