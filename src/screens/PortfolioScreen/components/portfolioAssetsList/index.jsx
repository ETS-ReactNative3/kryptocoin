import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

import { PortfolioAssetItem } from "../PortfolioAssetItem";
import { useNavigation } from "@react-navigation/native";
import { useRecoilValue } from "recoil";
import { allPortfolioAssets } from "../../../../atoms/portfolioAssets";

const PortfolioAssetsList = () => {
  const navigation = useNavigation();
  const assets = useRecoilValue(allPortfolioAssets);

  const getCurrentBalance = () =>
    assets
      .reduce(
        (total, currentAsset) =>
          total + currentAsset.currentPrice * currentAsset.quantityBought,
        0
      )
      .toFixed(2);

  const getCurrentValueChange = () => {
    const currentBalance = getCurrentBalance();
    const boughtBalanceSpended = assets.reduce(
      (total, currentAsset) =>
        total + currentAsset.priceBought * currentAsset.quantityBought,
      0
    );
    return (currentBalance - boughtBalanceSpended).toFixed(2);
  };

  const getCurrentPercentageChange = () => {
    const currentBalance = getCurrentBalance();
    const boughtBalanceSpended = assets.reduce(
      (total, currentAsset) =>
        total + currentAsset.priceBought * currentAsset.quantityBought,
      0
    );

    return (
      (
        ((currentBalance - boughtBalanceSpended) / boughtBalanceSpended) *
        100
      ).toFixed(3) || 0
    );
  };

  return (
    <View>
      <FlatList
        data={assets}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <PortfolioAssetItem assetItem={item} />}
        ListHeaderComponent={
          <>
            <View style={styles.balanceContainer}>
              <View>
                <Text style={styles.currentBalance}>Current Balance</Text>
                <Text style={styles.currentBalanceValue}>
                  ${getCurrentBalance()}
                </Text>
                <Text
                  style={{
                    ...styles.valueChange,
                    color: getCurrentValueChange() >= 0 ? "#16c784" : "#ea3943",
                  }}
                >
                  ${getCurrentValueChange()}(All Time)
                </Text>
              </View>

              <View
                style={{
                  ...styles.priceChangePercentageContainer,
                  backgroundColor:
                    getCurrentValueChange() >= 0 ? "#16c784" : "#ea3943",
                }}
              >
                <AntDesign
                  name={getCurrentValueChange() >= 0 ? "caretup" : "caretdown"}
                  size={12}
                  style={{ alignSelf: "center", marginRight: 10 }}
                  color={"white"}
                />
                <Text style={styles.percentageChange}>
                  {getCurrentPercentageChange()}%
                </Text>
              </View>
            </View>

            <View>
              <Text style={styles.assetsLabel}>Your Assets</Text>
            </View>
          </>
        }
        ListFooterComponent={
          <Pressable
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("AddNewAssetScreen")}
          >
            <Text style={styles.buttonText}>Add New Asset</Text>
          </Pressable>
        }
      />
    </View>
  );
};

export default PortfolioAssetsList;
