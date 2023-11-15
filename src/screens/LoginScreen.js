// CustomHeader.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import { images } from "../utils/constants";
import CustomButton from "../components/CustomButton";
import LoginFooter from "../components/LoginFooter";
import * as LocalAuthentication from "expo-local-authentication";
import Checkbox from "expo-checkbox";

const LoginScreen = ({ navigation }) => {
  const [isBiometricAvailable, setIsBiometricAvailable] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    checkBiometricAvailability();
  }, []);

  const handleRememberMeToggle = () => {
    setRememberMe(!rememberMe);
  };

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

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={images.MAXLIFE_LOGO} />
        <Text style={styles.loginText}>Login with{"\n"}Max Life ID</Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          marginBottom: 51,
        }}
      >
        <TextInput style={styles.ssoIdInput} placeholder="SSO ID" />
        <TextInput style={styles.passwordInput} placeholder="Password" />
        <View
          style={styles.checkboxContainer}
        >
          <Checkbox
            style={styles.checkbox}
            value={rememberMe}
            onValueChange={handleRememberMeToggle}
            color={rememberMe ? "#3597EC" : undefined}
          />
          <Text>Remember Me</Text>
        </View>
      </View>

      <View style={{ marginBottom: 51 }}>
        <CustomButton
          title="Login"
          onPress={() =>
            isBiometricAvailable
              ? handleAuthenticate()
              : navigation.navigate("BottomNavigation")
          }
        />
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <LoginFooter />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginTop: 36,
    paddingTop: 43,
    paddingBottom: 27,
    paddingHorizontal: 16,
  },
  logoContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 51,
  },
  logo: {
    marginBottom: 70,
  },
  loginText: {
    width: 192,
    color: "#171A21",
    textAlign: "center",
    fontFamily: "Manrope",
    fontSize: 32,
    fontWeight: "400",
    lineHeight: 44.8,
    letterSpacing: -0.112,
  },
  ssoIdInput: {
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
  },
  passwordInput: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    width: 328,
    height: 56,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#A8ABB1",
    backgroundColor: "#FFFFFF",
  },
  checkboxContainer: {  
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 24,
  },
  checkbox: {
    marginRight: 8,
    borderRadius: 4,
  },
  checkboxText: {
color:"#50566",
fontSize:16,
fontFamily:"Manrope",
fontWeight:"400",
lineHeight:22.4,
letterSpacing:-0.056,
  },
  forgotPasswordText: {
    marginTop: 16,
    color: "#F27930",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Manrope",
    fontWeight: "700",
    lineHeight: 44,
    letterSpacing: -0.056,
  },
});
