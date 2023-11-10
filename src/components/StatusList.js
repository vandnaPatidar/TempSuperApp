import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { images } from "../utils/constants";

const StatusList = ({ item, index }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: "#FFFFFF",
        paddingTop: 13,
        paddingBottom: 17,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#DCDDE0",
        marginHorizontal: 16,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          width:'100%'
        }}
      >
        <Image style={{ marginHorizontal: 8 }} source={images.LEADS} />
        <Text
          style={{
            width: 155,
            color: "#505662",
            fontSize: 13,
            fontWeight: "500",
            lineHeight: 18,
            letterSpacing: -0.045,
            marginRight: 29,
          }}
        >
          {item.statusName}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "auto",
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: "600",
              lineHeight: 18.2,
              letterSpacing: -0.045,
              marginRight: 16,
              textAlign: "right",
            }}
          >
            {item.statusCount}
          </Text>
          <Image source={images.ARROW_RIGHT} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default StatusList;
