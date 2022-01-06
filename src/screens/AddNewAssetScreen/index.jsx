import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles";
import SearchableDropdown from "react-native-searchable-dropdown";
import { useRecoilState } from "recoil";
import { allPortfolioBoughtAssetsInStorage } from "../../atoms/portfolioAssets";
import { getAllCoins, getDetailedCoinData } from "../../services/request";

const AddNewAssetScreen = () => {
  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCoinId, setSelectedCoinId] = useState(null);
  const [boughtAssetQuantity, setBoughtAssetQuantity] = useState("");
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [assetsInStorage, setAssetsInStorage] = useRecoilState(
    allPortfolioBoughtAssetsInStorage
  );

  console.log(selectedCoin);

  const onAddNewAsset = () => {};

  const fetchAllCoins = async () => {
    if (loading) return;

    setLoading(true);
    const allCoins = await getAllCoins();
    setAllCoins(allCoins);
    setLoading(false);
  };

  useEffect(() => {
    fetchAllCoins();
  }, []);

  const fetchCoinInfo = async () => {
    if (loading) return;

    setLoading(true);
    const coinInfo = await getDetailedCoinData(selectedCoinId);
    setSelectedCoin(coinInfo);
    setLoading(false);
  };

  useEffect(() => {
    if (selectedCoinId) {
      fetchCoinInfo();
    }
  }, [selectedCoinId]);

  return (
    <View style={{ flex: 1 }}>
      <SearchableDropdown
        items={allCoins}
        onItemSelect={(item) => setSelectedCoinId(item.id)}
        containerStyle={styles.dropDownContainer}
        itemStyle={styles.item}
        itemTextStyle={{ color: "#fff" }}
        resetValue={false}
        placeholder={selectedCoinId || "Select a coin..."}
        placeholderTextColor={"#fff"}
        textInputProps={{
          underlineColorAndroid: "transparent",
          style: {
            padding: 12,
            borderWidth: 1.5,
            borderColor: "#444444",
            backgroundColor: "#1e1e1e",
            color: "#fff",
          },
        }}
      />

      {selectedCoinId ? (
        <>
          <View style={styles.boughtQuantityContainer}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                onChangeText={setBoughtAssetQuantity}
                style={{ color: "#fff", fontSize: 90 }}
                value={boughtAssetQuantity}
                placeholder="0"
                keyboardType="numeric"
              />
              <Text style={styles.ticker}>BTC</Text>
            </View>
            <Text style={styles.pricePerCoin}>$4000 per coin</Text>
          </View>

          <Pressable
            style={{
              ...styles.buttonContainer,
              backgroundColor: !boughtAssetQuantity ? "#303030" : "#4169E1",
            }}
            onPress={onAddNewAsset}
            disabled={!boughtAssetQuantity}
          >
            <Text
              style={{
                ...styles.buttonText,
                color: !boughtAssetQuantity ? "grey" : "#fff",
              }}
            >
              Add New Asset
            </Text>
          </Pressable>
        </>
      ) : null}
    </View>
  );
};
export default AddNewAssetScreen;
