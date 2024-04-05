import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {categoryCardStyle} from './style';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/routes';
import {ArrowRight2} from 'iconsax-react-native';
import { COLORS } from '../../thema/colors';

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
      <ArrowRight2 size="30" color={COLORS.black} variant="Bold" />
    </TouchableOpacity>
  );
};

export default CategoryCard;
