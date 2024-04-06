import {Text, View, Image} from 'react-native';
import React from 'react';
import {infoStyles} from './style';

const UserInfo = () => {
  return (
    <View style={infoStyles.container}>
      <Image
        style={infoStyles.image}
        source={require('../../assets/images/prof.png')}
      />
      <Text style={infoStyles.name}>Kate Douglas</Text>
      <Text style={infoStyles.job}>Mobile Developer</Text>
    </View>
  );
};

export default UserInfo;
