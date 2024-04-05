import {Image, View, Text} from 'react-native';
import React from 'react';

// styles
import {cartStyles} from './style';
import Counter from '../ui/counter';

const CartCard = ({item}) => {
  return (
    <View style={cartStyles.container}>
      <View style={cartStyles.container1}>
        <Image
          style={cartStyles.image}
          source={{
            uri: item.image,
          }}
        />
      </View>

      <View style={cartStyles.container2}>
        <Text numberOfLines={1} style={cartStyles.title}>
          {item.title}
        </Text>
        <Text style={cartStyles.category}>{item.category}</Text>
        <Text style={cartStyles.price}>{item.price} &euro;</Text>
      </View>

      <View style={cartStyles.container3}>
        <Counter onChange={() => {}} size={25} />
      </View>
    </View>
  );
};

export default CartCard;
