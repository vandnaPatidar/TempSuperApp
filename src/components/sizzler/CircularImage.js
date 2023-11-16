import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const CircularImage = ({ source, text }) => (
  <View style={styles.container}>
    <Image source={source} style={styles.image} />
    <View>
    <Text style={styles.text}>{text}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 94, 
    height: 84,
    flexDirection: 'column', 
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 2,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  text: {
    // fontFamily: 'Manrope',
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 16,
    letterSpacing: -0.0035,
    textAlign: 'center',
  },
});

export default CircularImage;
