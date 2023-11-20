import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {indianOrange,white,shadowColor, naturalsLightBlack} from '../../themes/colors';
import closeIcon from '../../../assets/Icons/close.png';
import sizes from '../../themes/sizes';

const Button = ({
  btnText = 'Login',
  btnWidth = 200,
  height = 50,
  borderRadius = 150,
  backgroundColor = '#FFF',
  borderColor='',
  borderWidth='',
  rightIcon,
  onPress,
}) => {
  const containerStyle = {
    width: btnWidth,
    height: height,
    borderRadius: borderRadius,
    backgroundColor: backgroundColor,
    alignItems: 'center',
    borderColor: borderWidth ? borderColor:'',
    borderWidth: borderWidth ? borderWidth:0,
    // justifyContent: rightIcon ? 'space-evenly' : 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  };

  const btnTexts = {
    fontSize: sizes.defaultTitleSize,
    fontWeight: 700,
    lineHeight: 22,
    letterSpacing: -0.0035,
    textAlign: 'center',
    color: naturalsLightBlack,
  };

  return (
    <View style={styles.appContainer}>
      <TouchableOpacity
        style={containerStyle}
        onPress={onPress}>
        <Text style={btnTexts}>{btnText}</Text>
        {rightIcon && (
          <Image
            style={{marginLeft:15, alignItems: 'center', fontSize: 20}}
            source={closeIcon}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    // fontFamily: 'Manrope',
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 22,
    letterSpacing: -0.0035,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
