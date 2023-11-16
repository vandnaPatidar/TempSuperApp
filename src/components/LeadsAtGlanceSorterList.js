import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const LeadsAtGlanceSorterList = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{item.name}</Text>
      <View
        style={[
          styles.highligterView,
          { backgroundColor: isSelected ? "#3597EC" : "#FFFFFF" },
        ]}
      />
    </TouchableOpacity>
  );
};
export default LeadsAtGlanceSorterList;
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginRight: 24,
  },
  text: {
    fontSize: 16,
    color: isSelected ? "#3597EC" : "#505662",
    fontWeight: "700",
    lineHeight: 22.4,
    letterSpacing: -0.056,
    marginBottom: 4,
  },
  highligterView: {
    height: 3,
    alignSelf: "stretch",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
});
