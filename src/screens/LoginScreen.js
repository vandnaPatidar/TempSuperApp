// CustomHeader.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { images } from "../utils/constants";
import CustomButton from "../components/CustomButton";
import LoginFooter from "../components/LoginFooter";
import * as LocalAuthentication from "expo-local-authentication";

const LoginScreen = ({ navigation }) => {
  const [isBiometricAvailable, setIsBiometricAvailable] = useState(false);

  useEffect(() => {
    checkBiometricAvailability();
  }, []);

  const checkBiometricAvailability = async () => {
    const isAvailable = await LocalAuthentication.hasHardwareAsync();
    setIsBiometricAvailable(isAvailable);
  };

  const handleAuthenticate = async () => {
    if (isBiometricAvailable) {
      const result = await LocalAuthentication.authenticateAsync();
      console.log("result----------->", result);
      if (result.success) {
        // alert("Authentication successfull!");
        navigation.navigate("BottomNavigation");
      } else {
        // alert("Authentication failed or canceled.");
        navigation.navigate("BottomNavigation");
      }
    } else {
      alert("Biometric authentication is not available on this device.");
      navigation.navigate("BottomNavigation");
    }
  };
  // const FingerPrint = () => {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <Text>Biometric Authentication sample</Text>
  //       {isBiometricAvailable ? (
  //         <Button title="Authenticate" onPress={handleAuthenticate} />
  //       ) : (
  //         <Text>Biometric authentication is not available on this device.</Text>
  //       )}
  //     </View>
  //   );
  // };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        marginTop: 36,
        paddingTop: 43,
        paddingBottom: 27,
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom: 51,
        }}
      >
        <Image style={{ marginBottom: 70 }} source={images.MAXLIFE_LOGO} />
        <Text
          style={{
            width: 192,
            color: "#171A21",
            textAlign: "center",
            fontFamily: "Manrope",
            fontSize: 32,
            fontWeight: "400",
            lineHeight: 44.8,
            letterSpacing: -0.112,
          }}
        >
          Login with{"\n"}Max Life ID
        </Text>
      </View>
      <View style={{ marginBottom: 51 }}>
        <TextInput
          style={{
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 8,
            width: 328,
            height: 56,
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#A8ABB1",
            backgroundColor: "#FFFFFF",
            marginBottom: 18,
          }}
          placeholder="SSO ID"
        />
        <TextInput
          style={{
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 8,
            width: 328,
            height: 56,
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#A8ABB1",
            backgroundColor: "#FFFFFF",
          }}
          placeholder="Password"
        />
      </View>
      <View style={{ marginBottom: 51 }}>
        <CustomButton
          title="Login"
          onPress={() =>
           isBiometricAvailable ? handleAuthenticate() : navigation.navigate("BottomNavigation")
          }
        />
        <TouchableOpacity>
          <Text
            style={{
              marginTop: 16,
              color: "#F27930",
              fontSize: 16,
              textAlign: "center",
              fontFamily: "Manrope",
              fontWeight: "700",
              lineHeight: 44,
              letterSpacing: -0.056,
            }}
          >
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>
      <LoginFooter />
    </View>
  );
};

export default LoginScreen;
