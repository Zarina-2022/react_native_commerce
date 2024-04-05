import {View, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {introstyle} from './style';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/routes';

const Introduction = ({category}) => {
  const navigation = useNavigation();
  const {productList} = SCREENS;
  return (
    <View style={introstyle.container}>
      <Image
        source={require('../../assets/images/intro-shoes1.png')}
        style={introstyle.image}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate(productList, {category: category})}
        style={introstyle.shopBtn}>
        <Text style={introstyle.shopBtnText}>Shop Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Introduction;
