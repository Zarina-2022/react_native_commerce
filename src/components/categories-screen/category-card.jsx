import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {categoryCardStyle} from './style';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/routes';

const CategoryCard = ({item}) => {
  const {productList} = SCREENS;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(productList, {category: item, title: item})
      }
      style={categoryCardStyle.container}>
      <Text style={categoryCardStyle.text}>{item}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
