import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { icons, images } from "../utils/constants";

const LeadsAtGlanceList = ({ item, index }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.secondaryContainer}>
        <Image style={{ marginHorizontal: 8 }} source={icons.LEADS} />
        <Text style={styles.itemName}>{item.statusName}</Text>
        <View style={styles.countAndIconContainer}>
          <Text style={styles.count}>{item.statusCount}</Text>
          <Image source={images.ARROW_RIGHT} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default LeadsAtGlanceList;
const styles = StyleSheet.create({
  container: {
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
  },
  secondaryContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  itemName: {
    width: 155,
    color: "#505662",
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: -0.045,
    marginRight: 29,
  },
  countAndIconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
  },
  count: {
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 18.2,
    letterSpacing: -0.045,
    marginRight: 16,
    textAlign: "right",
  },
});
