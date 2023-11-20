import React from "react";
import { View, FlatList, Image, StyleSheet, Text } from "react-native";
import { icons, images } from "../../utils/constants";

const quickData = [
  { 
    id: "1", 
    image: icons.ADD_NEW_LEAD_ICON, 
    text: "Add New Lead" 
  },
  { 
    id: "2", 
    image: icons.ADD_NEW_LEAD_ICON, 
    text: "Generate Quote" 
  },
  { 
    id: "3", 
    image: icons.ADD_NEW_LEAD_ICON, 
    text: "Policy Login" 
  },
  {
    id: "4",
    image: icons.ADD_NEW_LEAD_ICON,
    text: "Track Application",
  },
  {
    id: "5",
    image: icons.ADD_NEW_LEAD_ICON,
    text: "Service Requests",
  },
  {
    id: "6",
    image: icons.ADD_NEW_LEAD_ICON,
    text: "Policy Servicing",
  },
  {
    id: "7",
    image: icons.ADD_NEW_LEAD_ICON,
    text: "Compare Plans",
  },
];

const QuickLinks = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textBox}>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.RecContainer}>
      <FlatList
        data={quickData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  RecContainer: {
    width: 360,
    margin: 12,
  },
  itemContainer: {
    marginLeft: 12,
  },
  image: {
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 18.2,
    letterSpacing: -0.0035,
    textAlign: "center",
  },
  textBox: {
    width: 68,
    height: 36,
  },
});

export default QuickLinks;
