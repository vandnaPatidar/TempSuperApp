import React from "react";
import { View, Text, Image } from "react-native";
import {images} from "../utils/constants"; 

const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={images.MAXLIFE_LOGO} />
    </View>
  );
};
export default SplashScreen;
