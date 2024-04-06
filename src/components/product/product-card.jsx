import {
  Alert,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
  const {productDetails, login} = SCREENS;
  const [isLiked, setIsLiked] = useState(false);
  const {addProductToCart, addProductToFavourites, isLogin} =
    useContext(StoreContext);

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
      <Button onPress={() => addProductToCart(item)} title="Add to Cart" />
    </View>
  );
};

export default ProductsListCard;
