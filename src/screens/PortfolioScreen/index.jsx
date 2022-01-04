import React from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-web";
import PortfolioAssetsList from "./components/portfolioAssetsList";

const PortfolioScreen = () => {
  return (
    <View>
      <PortfolioAssetsList />
    </View>
  );
};

export default PortfolioScreen;
