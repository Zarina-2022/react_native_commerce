import {useNavigation} from '@react-navigation/native';
import {View, TouchableOpacity} from 'react-native';

import {navIconStyles} from './style';

import {SCREENS} from '../../utils/routes';
import {COLORS} from '../../thema/colors';
import Badge from '../cart-screen/badge';

// import icons
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// Context
import React, {useContext} from 'react';
import {StoreContext} from '../../context/provider';

const HeaderTabIcons = () => {
  const navigation = useNavigation();
  const {cart} = SCREENS;
  const {badge} = useContext(StoreContext);

  return (
    <View style={navIconStyles.container}>
      <TouchableOpacity style={navIconStyles.cart}>
        <Icon name="search" size={22} color={COLORS.blue} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(cart)}
        style={navIconStyles.cart}>
        {badge?.length > 0 && <Badge badge={badge?.length} />}
        <Icon name="shopping-cart" size={24} color={COLORS.blue} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTabIcons;
