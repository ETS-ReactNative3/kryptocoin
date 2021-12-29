import axios from "axios";

export const getDetailedCoinData = async (coinId) => {
  try {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
    );
    return data;
  } catch (error) {
    throw new Error({ message: error });
  }
};

export const getCoinMarketChart = async (coinId) => {
  try {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=1&interval=hourly`
    );
    return data;
  } catch (error) {
    throw new Error({ message: error });
  }
};
