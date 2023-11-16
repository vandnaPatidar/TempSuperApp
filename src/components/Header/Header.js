import React from 'react';
import styles from './style';
import { View, Text, Image, Pressable } from 'react-native';
// import userProfile from '../../../assets/Images/user-photo.png';
import {images} from '../../utils/constants'
import arrowIcon from '../../../assets/Icons/chevron-down.png';
import bellIcon from '../../../assets/Icons/Union.png';
import helpCenter from '../../../assets/Icons/Vector.png';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Left side logo */}
      <View style={styles.leftContainer}>
        <Image source={images.USER_PROFILE_PHOTO} style={styles.logoImage} />
        <Text style={styles.dotStyle} />

        {/* Right side arrow */}
        <Pressable style={styles.rightSideArrow}>
          <Image source={arrowIcon} style={styles.arrowImage} />
        </Pressable>
      </View>

      {/* Right side icons */}
      <View style={styles.rightContainer}>
        {/* bellIcon for Help center text */}
        <Pressable>
          <Image source={bellIcon} style={styles.helpCenterText} />
        </Pressable>

        {/* chatBot Developer text */}
        <Pressable style={{ marginLeft: 28 }}>
          <Image source={helpCenter} style={styles.helpCenterText} />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
