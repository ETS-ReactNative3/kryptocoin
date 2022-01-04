import React, { useState, useEffect } from "react";
import { FlatList, RefreshControl } from "react-native";
import CoinItem from "../../components/CoinItem";
import { useWatchlist } from "../../contexts/WatchListContext";
import { getWatchListedCoins } from "../../services/request";

export const WatchListScreen = () => {
  const { watchlistCoinIds } = useWatchlist();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const transformCoinIds = () => watchlistCoinIds.join("%2C");

  const fetchWatchlistedCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const watchlistedCoinsData = await getWatchListedCoins(
      1,
      transformCoinIds()
    );
    console.log(transformCoinIds())

    setCoins(watchlistedCoinsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchWatchlistedCoins();
  }, [watchlistCoinIds]);

  return (
    <FlatList
      data={coins}
      renderItem={({ item }) => <CoinItem marketCoin={item} />}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          tintColor="white"
          onRefresh={fetchWatchlistedCoins}
        />
      }
    />
  );
};
