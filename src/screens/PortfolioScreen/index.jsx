import React, { Suspense } from "react";
import { View, Text } from "react-native";
import PortfolioAssetsList from "./components/portfolioAssetsList";

const PortfolioScreen = () => {
  return (
    <View>
      <Suspense
        fallback={
          <Text
            style={{
              color: "#fff",
              opacity: 0.9,
              textAlign: "center",
            }}
          >
            Loading...Wait a sec
          </Text>
        }
      >
        <PortfolioAssetsList />
      </Suspense>
    </View>
  );
};

export default PortfolioScreen;
