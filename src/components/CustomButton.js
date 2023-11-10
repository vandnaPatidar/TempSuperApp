// CustomHeader.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F27930",
        paddingVertical: 10,
        paddingHorizontal: 24,
        height: 42,
        width: 232,
        flexShrink: 0,
        borderRadius: 200,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: "#FFFFFF",
          textAlign: "center",
          fontFamily: "Manrope",
          fontSize: 16,
          fontWeight: "700",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
