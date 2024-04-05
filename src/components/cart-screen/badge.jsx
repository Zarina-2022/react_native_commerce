import {Text, View} from 'react-native';
import React from 'react';
import {badgeStyles} from './style';

const Badge = ({badge}) => {
  return (
    <View style={badgeStyles.badge}>
      <Text style={badgeStyles.badgeText}>{badge}</Text>
    </View>
  );
};

export default Badge;
