import React,{useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { images } from "../utils/constants";

const LeadsAtGlanceList = ({item}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "column",
        alignItems: "flex-start",
        marginRight: 24,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: isSelected ? '#3597EC' : "#505662",
          fontWeight: "700",
          lineHeight: 22.4,
          letterSpacing: -0.056,
          marginBottom:4,
        }}
      >
        {item.name}
      </Text>
      <View style={{height:3,alignSelf:'stretch',backgroundColor: isSelected ? '#3597EC' : '#FFFFFF',borderTopRightRadius:8, borderTopLeftRadius:8}}/>
    </TouchableOpacity>
  );
};
export default LeadsAtGlanceList;
