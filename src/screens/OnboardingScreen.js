// CustomHeader.js
import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
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
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        marginTop: 20,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
          backgroundColor: "#C4DDFE",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 32,
        }}
      >
        <Image
          source={images.MAXLIFE_LOGO}
          style={{
            width: 85,
            height: 52,
            marginTop: 48,
            marginBottom: 23,
            backgroundColor: "#C4DDFE",
          }}
        />
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Image
            style={{
              marginBottom: 24,
              width: 200,
              height: 200,
              backgroundColor: "#000000",
            }}
          />
          <Text
            style={{
              marginBottom: 24,
              color: "#171A21",
              textAlign: "center",
              fontSize: 25,
              fontWeight: "400",
              lineHeight: 35,
              letterSpacing: -0.087,
            }}
          >
            Workflows simplified for you
          </Text>
          <Text
            style={{
              marginBottom: 24,
              color: "#505662",
              textAlign: "center",
              fontSize: 16,
              fontWeight: "400",
              lineHeight: 22.4,
              letterSpacing: -0.056,
            }}
          >
            Integrated workflows from lead prospecting to sales and customer
            service
          </Text>
          <Image style={{ marginBottom: 25 }} />
        </View>
      </View>
      {/* <View
        style={{
          height: 260,
          backgroundColor: "#FFFFFF",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 32,
        }}
      > */}
      <CustomButton
        title="Log in"
        onPress={() => navigation.navigate("LoginScreen")}
      />
      <Text
        style={{
          marginTop: 16,
          marginBottom: 41,
          color: "#505662",
          textAlign: "center",
          fontFamily: "Manrope",
          fontSize: 13,
          fontWeight: "400",
        }}
      >
        By proceeding, you agree to our{"\n"}
        <Text
          style={{
            textDecorationStyle: "solid",
            textDecorationLine: "underline",
          }}
        >
          Terms & Conditions
        </Text>{" "}
        and{" "}
        <Text
          style={{
            textDecorationStyle: "solid",
            textDecorationLine: "underline",
          }}
          onPress={() => {
            alert("Privacy Policy");
          }}
        >
          Privacy Policy
        </Text>
      </Text>
      <LoginFooter />
      {/* </View> */}
    </View>
  );
};

export default OnboardingScreen;
