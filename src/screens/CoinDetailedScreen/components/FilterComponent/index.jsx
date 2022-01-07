import React, { memo } from "react";
import { Text, Pressable } from "react-native";

export const FilterComponent = ({
  filterDay,
  filterText,
  selectedRange,
  setSelectedRange,
}) => {
  const isFilterSelected = (filter) => filter === selectedRange;

  return (
    <Pressable
      onPress={() => setSelectedRange(filterDay)}
      style={{
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: isFilterSelected(filterDay)
          ? "#1e1e1e"
          : "transparent",
      }}
    >
      <Text style={{ color: isFilterSelected(filterDay) ? "#fff" : "grey" }}>
        {filterText}
      </Text>
    </Pressable>
  );
};
