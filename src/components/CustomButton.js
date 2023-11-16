import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F27930",
    paddingVertical: 10,
    paddingHorizontal: 24,
    height: 42,
    width: 232,
    flexShrink: 0,
    borderRadius: 200,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "Manrope",
    fontSize: 16,
    fontWeight: "700",
  },
});
