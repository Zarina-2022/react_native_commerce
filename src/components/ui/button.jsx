import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {buttonStyle} from './style';

const Button = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={buttonStyle.container}>
        <Text style={buttonStyle.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
