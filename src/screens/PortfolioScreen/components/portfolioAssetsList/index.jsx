import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const PortfolioAssetsList = () => {
  return (
    <View>
      <FlatList
        data={[1]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => <Text></Text>}
        ListHeaderComponent={
          <>
            <View style={styles.balanceContainer}>
              <View>
                <Text style={styles.currentBalance}>Current Balance</Text>
                <Text style={styles.currentBalanceValue}>$320.000</Text>
                <Text style={styles.valueChange}>$1200(All Time)</Text>
              </View>

              <View style={styles.priceChangePercentageContainer}>
                <AntDesign
                  name={"caretup"}
                  size={12}
                  style={{ alignSelf: "center", marginRight: 10 }}
                  color={"white"}
                />
                <Text style={styles.percentageChange}>2.3%</Text>
              </View>
            </View>

            <View>
              <Text style={styles.assetsLabel}>Your Assets</Text>
            </View>
          </>
        }
        ListFooterComponent={
          <Pressable style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Add New Asset</Text>
          </Pressable>
        }
      />
    </View>
  );
};

export default PortfolioAssetsList;
