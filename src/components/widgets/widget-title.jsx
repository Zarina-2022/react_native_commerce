import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {widgetTitlestyles} from './style';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/routes';

const WidgetTitle = ({title, category}) => {
  const {productList} = SCREENS;
  const navigation = useNavigation();
  return (
    <View style={widgetTitlestyles.container}>
      <Text style={widgetTitlestyles.title}>{title}</Text>
      <TouchableOpacity
        style={widgetTitlestyles.btn}
        onPress={() =>
          navigation.navigate(productList, {category: category, title})
        }>
        <Text style={widgetTitlestyles.btn}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WidgetTitle;
