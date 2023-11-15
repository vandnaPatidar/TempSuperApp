import React from "react";
import { View, Text } from "react-native";

const Table = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "#5B5B5B",
        borderRadius: 6,
        width: "100%",
        marginTop:8,
      }}
    >
      <View style={{ flexDirection: "row", alignSelf: "stretch" }}>
        <Text
          style={{
            paddingHorizontal: 12,
            paddingVertical: 10,
            color: "#171A21",
            fontSize: 13,
            fontWeight: 400,
            lineHeight: 18.2,
            letterSpacing: -0.045,
            borderWidth: 1,
            borderColor: "#5B5B5B",
            borderTopLeftRadius: 6,
            minWidth: "30%",
          }}
        >
          Criteria
        </Text>
        <Text
          style={{
            paddingHorizontal: 12,
            paddingVertical: 10,
            color: "#171A21",
            fontSize: 11,
            fontWeight: 400,
            lineHeight: 18.2,
            letterSpacing: -0.045,
            borderWidth: 1,
            borderColor: "#5B5B5B",
            borderTopRightRadius: 6,
            minWidth: "70%",
          }}
        >
          2 L to 4.99 L (Adj. MFYP)
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            paddingHorizontal: 12,
            paddingVertical: 10,
            color: "#171A21",
            fontSize: 13,
            fontWeight: 400,
            lineHeight: 18.2,
            letterSpacing: -0.045,
            borderWidth: 1,
            borderColor: "#5B5B5B",
            minWidth: "30%",
          }}
        >
          Reward
        </Text>
        <Text
          style={{
            paddingHorizontal: 12,
            paddingVertical: 10,
            color: "#171A21",
            fontSize: 11,
            fontWeight: 400,
            lineHeight: 18.2,
            letterSpacing: -0.045,
            borderWidth: 1,
            borderColor: "#5B5B5B",
            minWidth: "70%",
          }}
        >
          Rs 1000/- per NOP
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            paddingHorizontal: 12,
            paddingVertical: 10,
            color: "#171A21",
            fontSize: 13,
            fontWeight: 400,
            lineHeight: 18.2,
            letterSpacing: -0.045,
            borderWidth: 1,
            borderColor: "#5B5B5B",
            borderBottomLeftRadius: 6,
            minWidth: "30%",
          }}
        >
          Minima
        </Text>
        <Text
          style={{
            paddingHorizontal: 12,
            paddingVertical: 10,
            color: "#171A21",
            fontSize: 11,
            fontWeight: 400,
            lineHeight: 18.2,
            letterSpacing: -0.045,
            borderWidth: 1,
            borderColor: "#5B5B5B",
            borderBottomRightRadius: 6,
            minWidth: "70%",
          }}
        >
          100% MPA Achieved
        </Text>
      </View>
    </View>
  );
};
export default Table;
