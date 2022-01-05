import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles";
import SearchableDropdown from "react-native-searchable-dropdown";

const AddNewAssetScreen = () => {
  const [boughtAssetQuantity, setBoughtAssetQuantity] = useState("");

  return (
    <View style={{ flex: 1 }}>
      <SearchableDropdown
        items={[]}
        onItemSelect={(item) => console.log(item)}
        containerStyle={styles.dropDownContainer}
        itemStyle={styles.item}
        itemTextStyle={{
          color: "#fff",
        }}
        resetValue={false}
        placeholder={"Select a coin..."}
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
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("AddNewAssetScreen")}
      >
        <Text style={styles.buttonText}>Add New Asset</Text>
      </Pressable>
    </View>
  );
};
export default AddNewAssetScreen;
