import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { icons, images } from "../utils/constants";

const LeadCard = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 16,
      }}
    >
      <Text
        style={{
          backgroundColor: `${item.backgroundColor}`,
          color: "#FFFFFF",
          padding: 10,
          borderRadius: 20,
          alignSelf: "flex-start",
          marginRight: 16,
        }}
      >
        {item.initials}
      </Text>
      <View
        style={{
            flex:1,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <View
          style={{
            flex:1,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View style={{ flex:1,flexDirection: "column", marginBottom:5}}>
            <Text style={{ padding: 0, fontSize: 16, fontWeight:500 }}>{item.leadName}</Text>
            <Text style={{ paddingVertical: 0, fontSize: 13, fontWeight:400, color:"#505662" }}>
              Customer ID: {item.customerId}
            </Text>
          </View>
          <Image
            source={icons.CHEVRON_RIGHT_BLACK}
          />
        </View>
        <Text
          style={{
            fontSize:12,
            fontWeight:500,
            backgroundColor: "#E8EBF1",
            padding: 5,
            borderRadius: 5,
          }}
        >
          {item.noOfQuotes}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default LeadCard;
