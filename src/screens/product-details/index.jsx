import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

import {productDetailStyle} from './style';
import {COLORS} from '../../thema/colors';

// ui
import Button from '../../components/ui/button';
import Counter from '../../components/ui/counter';
import Spinner from '../../components/ui/spinner';

import {getRequest} from '../../api/http-requests';
import {PRODUCTS_URL} from '../../api/urls';

// icons
import {Heart, Star1} from 'iconsax-react-native';

// context
import {StoreContext} from '../../context/provider';

const ProductDetails = ({route}) => {
  const {item} = route?.params;
  const [product, setProduct] = useState(null);
  const [pending, setPending] = useState(false);
  const {addProductToCart} = useContext(StoreContext);

  useEffect(() => {
    setPending(true);
    getRequest(PRODUCTS_URL + `/${item.id}`)
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {
        console.log(err.message);
      })
      .finally(() => {
        setPending(false);
      });
  }, []);

  return (
    <SafeAreaView style={productDetailStyle.container}>
      {pending ? (
        <Spinner />
      ) : (
        <View style={productDetailStyle.container}>
          <ScrollView
            snapToAlignment={'start'} // baslangic yeri
            decelerationRate={'fast'} // the speed of the animation while moving the screen
            snapToInterval={Dimensions.get('window').height} // how big is one item in this
          >
            <View style={productDetailStyle.body}>
              <Image
                style={productDetailStyle.img}
                source={{
                  uri: product?.image,
                }}
              />
              <View style={productDetailStyle.ratingColumn}>
                <Text style={productDetailStyle.rating}>
                  Rating:{product?.rating?.rate} / Count:
                  {product?.rating?.count}
                </Text>
                <View style={productDetailStyle.stars}>
                  <Star1 color={COLORS.lightOrange} variant="Bold" size={20} />
                  <Star1 color={COLORS.lightOrange} variant="Bold" size={20} />
                  <Star1
                    color={COLORS.lightOrange}
                    variant="Outline"
                    size={20}
                  />
                  <Star1
                    color={COLORS.lightOrange}
                    variant="Outline"
                    size={20}
                  />
                  <Star1
                    color={COLORS.lightOrange}
                    variant="Outline"
                    size={20}
                  />
                </View>
              </View>

              <View style={productDetailStyle.columns}>
                <View style={productDetailStyle.right}>
                  <Text numberOfLines={2} style={productDetailStyle.title}>
                    {product?.title}
                  </Text>
                  <Text style={productDetailStyle.category}>
                    {product?.category}
                  </Text>
                  <View style={productDetailStyle.priceWrapper}>
                    <Text style={productDetailStyle.price}>
                      {product?.price} &euro;
                    </Text>
                    <Text style={productDetailStyle.discount}>10%</Text>
                  </View>
                </View>

                <View style={productDetailStyle.left}>
                  <TouchableOpacity style={{paddingLeft: 10}}>
                    <Heart size="25" color={COLORS.black} variant="Outline" />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={productDetailStyle.description}>Description:</Text>
                <Text>{product?.description}</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      )}

      <View style={productDetailStyle.cart}>
        <View style={productDetailStyle.btn1}>
          <Counter onChange={() => {}} />
        </View>
        <View style={productDetailStyle.btn2}>
          <Button
            onPress={() => addProductToCart(item)}
            title={'Add to Cart'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
