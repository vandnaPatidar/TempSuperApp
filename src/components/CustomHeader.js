// CustomHeader.js
import React from 'react';
import { View, Text } from 'react-native';

const CustomHeader = ({ title, subheader }) => {
  return (
    <View style={{marginTop:15}}>
      <Text>{title}</Text>
      <Text>{subheader}</Text>
    </View>
  );
};

export default CustomHeader;
