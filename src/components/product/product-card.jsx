import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {productListStyle} from './style';
import {Heart} from 'iconsax-react-native';
import {COLORS} from '../../thema/colors';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/routes';
import Button from '../ui/button';
import {StoreContext} from '../../context/provider';

const ProductsListCard = ({item}) => {
  const navigation = useNavigation();
  const {productDetails} = SCREENS;
  const {addProductToCart, addProductToFavourites} = useContext(StoreContext);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={productListStyle.container}>
      <Pressable
        onPress={() => navigation.navigate(productDetails, {item: item})}
        style={productListStyle.imageWrapper}>
        <Image
          style={productListStyle.card}
          source={{
            uri: item.image,
          }}
        />
      </Pressable>
      <View style={productListStyle.adjustment}>
        <Text numberOfLines={3} style={productListStyle.title}>
          {item.title}
        </Text>
      </View>

      <View style={productListStyle.columns}>
        <View style={{flex: 2}}>
          <Text style={productListStyle.category}>{item.category}</Text>
          <Text style={productListStyle.price}>{item.price} &euro;</Text>
        </View>
        <View style={productListStyle.favouriteIcon}>
          <TouchableOpacity
            onPress={() => {
              addProductToFavourites(item);
              setIsLiked(!isLiked);
            }}
            style={{paddingLeft: 10}}>
            <Heart
              size="20"
              color={isLiked ? COLORS.orange : COLORS.black}
              variant={isLiked ? 'Bold' : 'Outline'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Button onPress={() => addProductToCart(item)} title="Add to Cart" />
    </View>
  );
};

export default ProductsListCard;
