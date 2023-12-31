import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { status, leadsAtGlance, leadsAtGlanceData } from "../../utils/constants";
import LeadsAtGlanceList from "./LeadsAtGlanceList";

const LeadsAtGlance = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState("Status");

  const leadsAtGlanceSorterList = ({ item, index }) => {
    const isSelected = selectedItemIndex === index;
    return (
      <TouchableOpacity
        style={styles.glanceCardTypeContainer}
        onPress={() => {
          setSelectedItemIndex(index);
          setSelectedItem(item);
        }}
      >
        <Text
          style={[
            styles.glanceCardTypeText,
            { color: isSelected ? "#3597EC" : "#505662" },
          ]}
        >
          {item}
        </Text>
        <View
          style={[
            styles.optionHiglightingView,
            { backgroundColor: isSelected ? "#3597EC" : "#FFFFFF" },
          ]}
        />
      </TouchableOpacity>
    );
  };

  return (
      <View style={styles.glanceView}>
        <Text style={styles.glanceHeading}>LEADS AT A GLANCE</Text>
        <View style={styles.glanceCard}>
          <View style={styles.glanceCardTypesContainer}>
            <FlatList
              data={leadsAtGlance}
              horizontal={true}
              scrollEnabled={true}
              showsHorizontalScrollIndicator={false}
              renderItem={leadsAtGlanceSorterList}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <FlatList
            data={leadsAtGlanceData[selectedItemIndex]}
            scrollEnabled={true}
            renderItem={(item, index) => <LeadsAtGlanceList {...item} />}
          />
        </View>
      </View>
  );
};

export default LeadsAtGlance;

const styles = StyleSheet.create({
  glanceView: {
    paddingTop: 24,
    paddingBottom: 48,
    paddingHorizontal: 16,
    backgroundColor: "rgba(232, 235, 241, 0.50)",
  },
  glanceHeading: {
    marginBottom: 16,
    color: "#505662",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 19,
    letterSpacing: -0.049,
  },
  glanceCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 16,
  },
  glanceCardTypesContainer: {
    paddingTop: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBlockColor: "#DCDDE0",
    marginBottom: 16,
  },
  glanceCardTypeContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginRight: 24,
  },
  glanceCardTypeText: {
    fontSize: 16,
    // color: isSelected ? "#3597EC" : "#505662",
    fontWeight: "700",
    lineHeight: 22.4,
    letterSpacing: -0.056,
    marginBottom: 4,
  },
  optionHiglightingView: {
    height: 3,
    alignSelf: "stretch",
    // backgroundColor: isSelected ? "#3597EC" : "#FFFFFF",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
});
