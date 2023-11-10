import React from "react";
import { View, FlatList, Image, StyleSheet, Text } from "react-native";
import AddNewLeadImage from '../../../../assets/AddNewLead.png';
import TrackApplicationImage from "../../../../assets/TrackApplication.png";

const imageMap = {
  "AddNewLeadImage.png": AddNewLeadImage,
  "TrackApplicationImage.png": TrackApplicationImage,
};

const quickData = [
  { 
    id: "1", 
    image: imageMap["AddNewLeadImage.png"], 
    text: "Add New Lead" 
  },
  { 
    id: "2", 
    image: imageMap["AddNewLeadImage.png"], 
    text: "Generate Quote" 
  },
  { 
    id: "3", 
    image: imageMap["AddNewLeadImage.png"], 
    text: "Policy Login" 
  },
  {
    id: "4",
    image: imageMap["TrackApplicationImage.png"],
    text: "Track Application",
  },
  {
    id: "5",
    image: imageMap["TrackApplicationImage.png"],
    text: "Service Requests",
  },
  {
    id: "6",
    image: imageMap["TrackApplicationImage.png"],
    text: "Policy Servicing",
  },
  {
    id: "7",
    image: imageMap["TrackApplicationImage.png"],
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
