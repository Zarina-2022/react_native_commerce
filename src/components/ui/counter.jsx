import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {counterStyle} from './style';
import {AddCircle, MinusCirlce} from 'iconsax-react-native';
import {COLORS} from '../../thema/colors';

const Counter = ({onChange, size = 30}) => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    if (counter < 10) {
      setCounter(counter + 1);
      onChange(counter + 1); // Call onChange with the updated counter value
    }
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      onChange(counter - 1); // Call onChange with the updated counter value
    }
  };

  return (
    <View style={counterStyle.container}>
      <TouchableOpacity onPress={decrease} style={counterStyle.icon}>
        <MinusCirlce
          style={counterStyle.iconSelf}
          size={size}
          variant="Outline"
          color={COLORS.blue}
        />
      </TouchableOpacity>
      <View style={counterStyle.textContainer}>
        <Text style={counterStyle.text}>{counter}</Text>
      </View>
      <TouchableOpacity onPress={increase} style={counterStyle.icon}>
        <AddCircle
          style={counterStyle.iconSelf}
          size={size}
          variant="Bold"
          color={COLORS.blue}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
