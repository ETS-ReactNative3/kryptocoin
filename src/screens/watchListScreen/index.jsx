import React, { useState, useEffect } from "react";
import { FlatList, RefreshControl } from "react-native";
import CoinItem from "../../components/CoinItem";
import { useWatchlist } from "../../contexts/WatchListContext";
import { getWatchListedCoins } from "../../services/request";

export const WatchListScreen = () => {
  const { watchlistCoinIds } = useWatchlist();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState();
  const transformCoinIds = () => watchlistCoinIds.join("%2C");

  const fetchWatchListedCoins = async () => {
    if (loading) return;

    setLoading(true);
    const watchListedCoinsData = await getWatchListedCoins(
      1,
      transformCoinIds()
    );
    setCoins(watchListedCoinsData);
    setLoading(false);
  };

  useEffect(() => fetchWatchListedCoins(), []);

  useEffect(() => {
    fetchWatchListedCoins();
  }, [watchlistCoinIds]);

  return (
    <FlatList
      data={coins}
      renderItem={({ item }) => <CoinItem marketCoin={item} />}
      RefreshControl={
        <RefreshControl
          refreshing={loading}
          tintColor={"white"}
          onRefresh={fetchWatchListedCoins}
        />
      }
    />
  );
};
