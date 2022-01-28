import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

import { PortfolioAssetItem } from "../PortfolioAssetItem";
import { useNavigation } from "@react-navigation/native";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  allPortfolioAssets,
  allPortfolioBoughtAssetsInStorage,
} from "../../../../atoms/portfolioAssets";
import { FontAwesome } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PortfolioAssetsList = () => {
  const navigation = useNavigation();
  const assets = useRecoilValue(allPortfolioAssets);
  const [storageAssets, SetStorageAssets] = useRecoilState(
    allPortfolioBoughtAssetsInStorage
  );

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
    if (currentBalance < 1) return `0%`;

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

  const onDeleteAssets = async (asset) => {
    const newAssets = storageAssets.filter(
      (coin) => coin.unique_id !== asset.item.unique_id
    );
    const jsonValue = JSON.stringify(newAssets);

    await AsyncStorage.setItem("@portfolio_coins", jsonValue);
    SetStorageAssets(newAssets);
  };

  const renderDeleteButton = (data) => {
    return (
      <Pressable
        style={{
          flex: 1,
          backgroundColor: "#ea3943",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingRight: 30,
          marginLeft: 20,
        }}
        onPress={() => onDeleteAssets(data)}
      >
        <FontAwesome name="trash-o" size={24} color="#fff" />
      </Pressable>
    );
  };

  return (
    <SwipeListView
      data={assets}
      renderItem={({ item }) => <PortfolioAssetItem assetItem={item} />}
      rightOpenValue={-75}
      disableRightSwipe
      keyExtractor={({ id, index }) => `${id}_${Math.random()}_${index}`}
      renderHiddenItem={(data) => renderDeleteButton(data)}
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
                {getCurrentPercentageChange() || 0}
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
  );
};

export default PortfolioAssetsList;
