import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

const LoginFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        Max Life Super App is only available to Max Life employees.{"\n"}Are you
        customer of Max Life Insurance?
      </Text>
      <TouchableOpacity>
        <Text style={styles.downloadLiteAppText}>
          Download Max Life Insurance Lite App
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 328,
    gap: 10,
    marginHorizontal: 16,
    paddingVertical: 16,
    borderTopColor: "#EEEEEF",
    borderTopWidth: 1,
  },

  footerText: {
    marginBottom: 10,
    alignSelf: "stretch",
    textAlign: "center",
    fontFamily: "Manrope",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 14,
    letterSpacing: -0.035,
    color: "#505662",
  },

  downloadLiteAppText: {
    alignSelf: "stretch",
    color: "#F27930",
    textAlign: "center",
    fontFamily: "Manrope",
    fontSize: 10,
    fontWeight: "700",
    lineHeight: 14,
    letterSpacing: -0.035,
  },
});
