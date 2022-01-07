import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";
import WatchListProvider from "./src/contexts/WatchListContext";
import { RecoilRoot } from "recoil";
import { LogBox } from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

export default function App() {
  LogBox.ignoreLogs(["Setting a timer"]);

  let [fontsLoaded] = useFonts({
    Inter_900Black,
    DroidSans: require("./assets/fonts/DroidSans.ttf"),
  });

  if (!fontsLoaded) return <ActivityIndicator size={"large"} />;

  return (
    <NavigationContainer
      theme={{
        colors: {
          backgroundColor: "#121212",
        },
      }}
    >
      <RecoilRoot>
        <WatchListProvider>
          <View style={styles.container}>
            <Navigation />
            <StatusBar style="light" />
          </View>
        </WatchListProvider>
      </RecoilRoot>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
});
