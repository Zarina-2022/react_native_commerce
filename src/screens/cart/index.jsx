import {FlatList, View} from 'react-native';
import React, {useContext} from 'react';
import {screenstyles} from '../../styles/screen-styles';
import {StoreContext} from '../../context/provider';

// components
import CartCard from '../../components/cart-screen/cart-card';
import Summary from '../../components/cart-screen/summary';
import {cartStyle} from './style';

const Cart = () => {
  const {badge} = useContext(StoreContext);
  return (
    <View style={screenstyles.container}>
      <View style={cartStyle.cartWrapper}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={badge}
          renderItem={({item}) => <CartCard item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
      <Summary />
    </View>
  );
};

export default Cart;
