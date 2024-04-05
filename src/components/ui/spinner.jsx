import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import {spinnerStyle} from './style';
import {COLORS} from '../../thema/colors';

const Spinner = () => {
  return (
    <View style={spinnerStyle.container}>
      <ActivityIndicator size={'large'} color={COLORS.green} />
    </View>
  );
};

export default Spinner;
