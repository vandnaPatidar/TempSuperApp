import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { GO_WITH_THIS_QUOTE, icons } from "../utils/constants";

const QuoteCard = ({ item }) => {
  const [isFullDetails, setIsFullDetails] = useState(false);
  return (
    <View style={styles.planCard}>
      <Text style={styles.planName}>{item.planName}</Text>
      <View style={styles.planDetailsCard}>
        <View style={styles.topDisplaySection}>
          {item.topDisplay.map((detail) => {
            return (
              <View style={styles.topDisplayItem}>
                <Text style={styles.topDisplayItemName}>{detail.name}</Text>
                <Text style={styles.topDisplayItemValue}>{detail.value}</Text>
              </View>
            );
          })}
          <TouchableOpacity
            onPress={() => setIsFullDetails(!isFullDetails)}
            style={styles.chevronButton}
          >
            <Image
              source={isFullDetails ? icons.CHEVRON_UP : icons.CHEVRON_DOWN}
            />
          </TouchableOpacity>
        </View>
        {isFullDetails && (
          <View style={styles.hiddenDetailsSection}>
            {item.hiddenDetails.map((detail) => {
              return (
                <View style={styles.hiddenDetailsItem}>
                  <Text style={styles.hiddenDetailsItemName}>
                    {detail.name}
                  </Text>
                  <Text style={styles.hiddenDetailsItemValue}>
                    {detail.value}
                  </Text>
                </View>
              );
            })}
          </View>
        )}
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.planTypeButton}>
            <Text style={styles.planTypeButtonText}>{item.planType}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.goWithThisQuoteButton}>
            <Text style={styles.goWithThisQuoteButtonText}>
              {GO_WITH_THIS_QUOTE}
            </Text>
            <Image
              style={{ marginLeft: "auto" }}
              source={icons.CHEVRON_RIGHT}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  planCard: {
    backgroundColor: "skyblue",
    borderRadius: 8,
    margin: 16,
    marginBottom:0,
  },
  planName: {
    fontSize: 18,
    // margin: 12,
    padding: 12,
    paddingBottom: 2,
  },
  planDetailsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#CBCCD0",
    padding: 12,
  },
  topDisplaySection: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 8,
  },
  topDisplayItem: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginRight: 20,
  },
  topDisplayItemName: {
    fontSize: 10,
    color: "#252931",
  },
  topDisplayItemValue: {
    fontSize: 13,
    color: "#252931",
  },
  chevronButton: {
    marginLeft: "auto",
    padding: 5,
  },
  hiddenDetailsSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    flexWrap: "wrap",
  },
  hiddenDetailsItem: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    minWidth: "33.33%",
    maxWidth: "33.33%",
    // borderRightWidth: 1,
    // borderColor: "#CBCCD0",
    marginBottom: 8,
  },
  hiddenDetailsItemName: {
    fontSize: 8,
    color: "#252931",
  },
  hiddenDetailsItemValue: {
    fontSize: 13,
    color: "#252931",
  },
  buttonSection: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  planTypeButton: {
    borderWidth: 1,
    borderColor: "#CBCCD0",
    borderRadius: 6,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  planTypeButtonText: {
    fontSize: 10,
    color: "#3597EC",
    fontWeight: "500",
  },
  goWithThisQuoteButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#CBCCD0",
  },
  goWithThisQuoteButtonText: {
    fontFamily: "Manrope",
    fontSize: 13,
    fontWeight: "700",
  },
});
export default QuoteCard;
