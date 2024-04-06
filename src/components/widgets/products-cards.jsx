import {Alert, Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {widgetProductsStyles} from './style';
import {Heart} from 'iconsax-react-native';
import {COLORS} from '../../thema/colors';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/routes';
import {StoreContext} from '../../context/provider';

const ProductsCards = ({item}) => {
  const navigation = useNavigation();
  const {productDetails, login} = SCREENS;
  const {addProductToFavourites, isLogin} = useContext(StoreContext);
  const [isLiked, setIsLiked] = useState(false);

  const isLoginTrue = () => {
    if (isLogin) {
      addProductToFavourites(item);
    } else {
      Alert.alert(
        'Please, login',
        'To add a product to favourites you must first login',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => navigation.navigate(login),
          },
        ],
      );
    }
  };

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
          <TouchableOpacity
            onPress={() => {
              isLoginTrue(); // add it to favorites
              setIsLiked(!isLiked); // Toggle the like status
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
    </Pressable>
  );
};

export default ProductsCards;
