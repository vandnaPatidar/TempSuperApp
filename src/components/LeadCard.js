import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { icons, images } from "../utils/constants";

const LeadCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={[styles.nameLabel, {backgroundColor: `${item.backgroundColor}`} ]}>
        {item.initials}
      </Text>
      <View style={styles.detailsAndBadgesContainer}>
        <View style={styles.detailsAndIconContainer}>
          <View style={styles.details}>
            <Text style={styles.customerName}>{item.leadName}</Text>
            <Text style={styles.customerId}>
              Customer ID: {item.customerId}
            </Text>
          </View>
          <Image source={icons.CHEVRON_RIGHT_BLACK} />
        </View>
        <Text style={styles.badges}>{item.noOfQuotes}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default LeadCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
    paddingRight: 18,
  },
  nameLabel: {
    color: "#FFFFFF",
    padding: 10,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginRight: 16,
  },
  detailsAndBadgesContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  detailsAndIconContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  details: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 5,
  },
  customerName: {
    padding: 0,
    fontSize: 16,
    fontWeight: 500,
  },
  customerId: {
    paddingVertical: 0,
    fontSize: 13,
    fontWeight: 400,
    color: "#505662",
  },
  badges: {
    fontSize: 12,
    fontWeight: 500,
    backgroundColor: "#E8EBF1",
    padding: 5,
    borderRadius: 5,
  },
});
