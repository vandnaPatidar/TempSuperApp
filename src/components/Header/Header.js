import React from 'react';
import styles from './style';
import { View, Text, Image, Pressable } from 'react-native';
import {icons, images} from '../../utils/constants'


const Header = () => {
  return (
    <View style={styles.container}>
      {/* Left side logo */}
      <View style={styles.leftContainer}>
        <Image source={images.USER_PROFILE} style={styles.logoImage} />
        <Text style={styles.dotStyle} />

        {/* Right side arrow */}
        <Pressable style={styles.rightSideArrow}>
          <Image source={icons.CHEVRON_DOWN} style={styles.arrowImage} />
        </Pressable>
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
