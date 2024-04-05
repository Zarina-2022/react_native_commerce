import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {widgetProductsStyles} from './style';
import {Heart} from 'iconsax-react-native';
import {COLORS} from '../../thema/colors';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/routes';

const ProductsCards = ({item}) => {
  const navigation = useNavigation();
  const {productDetails} = SCREENS;
  return (
    <Pressable
      onPress={() => navigation.navigate(productDetails, {item: item})}
      style={widgetProductsStyles.container}>
      <Image
        style={widgetProductsStyles.card}
        source={{
          uri: item.image,
        }}
      />
      <View style={widgetProductsStyles.adjustment}>
        <Text numberOfLines={3} style={widgetProductsStyles.title}>
          {item.title}
        </Text>
      </View>

      <View style={widgetProductsStyles.columns}>
        <View style={{flex: 2}}>
          <Text style={widgetProductsStyles.category}>{item.category}</Text>
          <Text style={widgetProductsStyles.price}>{item.price} &euro;</Text>
        </View>
        <View style={widgetProductsStyles.favouriteIcon}>
          <TouchableOpacity style={{paddingLeft: 10}}>
            <Heart size="20" color={COLORS.black} variant="Outline" />
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductsCards;
