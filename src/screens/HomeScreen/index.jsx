import React, { useEffect, useState } from "react";
import {
  FlatList,
  ActivityIndicator,
  RefreshControl,
  View,
  Text,
} from "react-native";
import CoinItem from "../../components/CoinItem";

import { getMarketData } from "../../services/request";

const HomeScreen = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async (pageNumber) => {
    if (loading) return;

    setLoading(true);
    const coinsData = await getMarketData(pageNumber);
    setCoins((existingCoins) => [...existingCoins, ...coinsData]);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const reFetchCoins = async () => {
    if (loading) return;

    setLoading(true);
    const coinsData = await getMarketData();
    setCoins(coinsData);
    setLoading(false);
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View>
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          letterSpacing: 1,
          paddingHorizontal: 20,
          paddingBottom: 5,
          fontFamily: "DroidSans",
        }}
      >
        Cryptoassets
      </Text>
      <FlatList
        data={coins}
        renderItem={({ item }) => <CoinItem marketCoin={item} />}
        onEndReached={() => fetchCoins(coins.length / 50 + 1)}
        keyExtractor={(item, index) => String(index)}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            tintColor="white"
            onRefresh={reFetchCoins}
          />
        }
      />
    </View>
  );
};

export default HomeScreen;
