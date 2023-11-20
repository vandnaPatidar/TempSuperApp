
import React from "react";
import styles from "./style";
import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
// import userProfile from '../../../assets/Images/user-photo.png';
import arrowIcon from "../../../assets/Icons/chevron-down.png";
import bellIcon from "../../../assets/Icons/Union.png";
import helpCenter from "../../../assets/Icons/Vector.png";
import { useNavigation } from "@react-navigation/native";
import {icons, images} from '../../utils/constants'



const Header = () => {
  const navigation = useNavigation()
  
  return (
    <View style={styles.container}>
      {/* Left side logo */}
      <View style={styles.leftContainer}>
        <Image source={images.USER_PROFILE_PHOTO} style={styles.logoImage} />
        <Text style={styles.dotStyle} />

        {/* Right side arrow */}
        <TouchableOpacity onPress={() => navigation.navigate("My Profile")} style={styles.rightSideArrow}>
          <Image source={arrowIcon} style={styles.arrowImage} />
        </TouchableOpacity>
      </View>

      {/* Right side icons */}
      <View style={styles.rightContainer}>
        {/* bellIcon for Help center text */}
        <Pressable>
          <Image source={icons.BELL_ICON} style={styles.helpCenterText} />
        </Pressable>

        {/* chatBot Developer text */}
        <Pressable style={{ marginLeft: 28 }}>
          <Image source={icons.HELP_CENTER} style={styles.helpCenterText} />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
