import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { images } from "../utils/constants";

const FloatingButton = ({ name }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.buttonText}>{name}</Text>
      <Image source={images.PLUS_BUTTON} style={{ marginLeft: 5 }} />
    </TouchableOpacity>
  );
};
export default FloatingButton;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    padding: 10,
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 12,
    left: 135,
    right: 17,
    backgroundColor: "#FF8942",
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "Manrope",
    fontSize: 16,
    fontWeight: "700",
  },
});
