import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 10,
  },
  currentBalance: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
  currentBalanceValue: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "600",
    letterSpacing: 1,
  },
  valueChange: {
    color: "#16c784",
    fontWeight: "600",
    fontSize: 15,
  },
  percentageChange: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "500",
  },
  priceChangePercentageContainer: {
    flexDirection: "row",
    backgroundColor: "#16c784",
    borderRadius: 5,
    paddingHorizontal: 3,
    paddingVertical: 8,
  },
  assetsLabel: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "600",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: "#4169E1",
    padding: 10,
    alignItems: "center",
    marginVertical: 25,
    marginHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "500",
  },
});

export default styles;
