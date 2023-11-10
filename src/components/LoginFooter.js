import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";

const LoginFooter = () => {
    return(
        <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: 328,
          gap: 10,
          marginHorizontal: 16,
          paddingVertical: 16,
          borderTopColor: "#EEEEEF",
          borderTopWidth: 1,
        }}
      >
        <Text
          style={{
            marginBottom: 10,
            alignSelf: "stretch",
            textAlign: "center",
            fontFamily: "Manrope",
            fontSize: 10,
            fontWeight: "500",
            lineHeight: 14,
            letterSpacing: -0.035,
            color: "#505662",
          }}
        >
          Max Life Super App is only available to Max Life employees.{"\n"}Are
          you customer of Max Life Insurance?
        </Text>
        <TouchableOpacity>
        <Text
          style={{
            alignSelf: "stretch",
            color: "#F27930",
            textAlign: "center",
            fontFamily: "Manrope",
            fontSize: 10,
            fontWeight: "700",
            lineHeight: 14,
            letterSpacing: -0.035,
          }}
        >
          Download Max Life Insurance Lite App
        </Text>
        </TouchableOpacity>
      </View>
    )
};
export default LoginFooter;