// CustomHeader.js
import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import LoginFooter from "../components/LoginFooter";
import SplashScreen from "./SplashScreen";
import { images } from "../utils/constants";

const OnboardingScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return loading ? (
    <SplashScreen />
  ) : (
    <View style={styles.container}>
      <View style={styles.gradientContainer}>
        <Image source={images.MAXLIFE_LOGO} style={styles.logo} />
        <View style={styles.onboardingContent}>
          <Image
            style={{
              marginBottom: 24,
              width: 200,
              height: 200,
              backgroundColor: "#000000",
            }}
          />
          <Text style={styles.heading}>Workflows simplified for you</Text>
          <Text style={styles.descriptionText}>
            Integrated workflows from lead prospecting to sales and customer
            service
          </Text>
          <Image style={{ marginBottom: 25 }} />
        </View>
      </View>
      <CustomButton
        title="Log in"
        onPress={() => navigation.navigate("LoginScreen")}
      />
      <Text style={styles.tncText}>
        By proceeding, you agree to our{"\n"}
        <Text style={styles.underline}>Terms & Conditions</Text> and{" "}
        <Text
          style={styles.underline}
          onPress={() => {
            alert("Privacy Policy");
          }}
        >
          Privacy Policy
        </Text>
      </Text>
      <LoginFooter />
    </View>
  );
};

export default OnboardingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center",
  },
  gradientContainer: {
    paddingHorizontal: 16,
    backgroundColor: "#C4DDFE",
    width: "100%",
    // height: "67%",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 32,
  },
  logo: {
    // width: 85,
    // height: 52,
    marginTop: 48,
    marginBottom: 23,
    backgroundColor: "#C4DDFE",
  },
  onboardingContent: {
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    marginBottom: 24,
    color: "#171A21",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "400",
    lineHeight: 35,
    letterSpacing: -0.087,
  },
  descriptionText: {
    marginBottom: 24,
    color: "#505662",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22.4,
    letterSpacing: -0.056,
  },
  tncText: {
    marginTop: 16,
    marginBottom: 41,
    color: "#505662",
    textAlign: "center",
    fontFamily: "Manrope",
    fontSize: 13,
    fontWeight: "400",
  },
  underline: {
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
});
