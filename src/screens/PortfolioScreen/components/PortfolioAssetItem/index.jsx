import React from "react";
import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

export const PortfolioAssetItem = () => {
  return (
    <View style={styles.coinCointainer}>
      <Image
        source={{ uri: "https://thispersondoesnotexist.com/image" }}
        style={{ height: 30, width: 30, borderRadius: 50 }}
      />
      <View>
        <Text style={styles.title}>Bitcoin</Text>
        <Text style={styles.ticker}>BTC</Text>
      </View>

      <View style={{ marginLeft: "auto" }}>
        <Text style={styles.title}>$3200</Text>
        <View style={{ flexDirection: "row" }}>
          <AntDesign
            name={"caretup"}
            size={12}
            style={{ alignSelf: "center", marginRight: 5 }}
            color={"#16c784"}
          />
          <Text style={{ color: "#16c784", fontWeight: "700" }}>1.2%</Text>
        </View>
      </View>

      <View style={styles.quantityContainer}>
        <Text style={styles.title}>$90000</Text>
        <Text style={styles.ticker}>2 BTC</Text>
      </View>
    </View>
  );
};
