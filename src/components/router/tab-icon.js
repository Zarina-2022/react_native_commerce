import React from 'react';

import {SCREENS} from '../../utils/routes';

// import icons
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconMat from 'react-native-vector-icons/dist/MaterialIcons';

import {
  ProfileCircle,
  Category2,
  NotificationBing,
  Login,
  MessageEdit,
} from 'iconsax-react-native';

const TabIcon = ({name, focused, color, size}) => {
  const {
    cart,
    categories,
    favourites,
    homepage,
    login,
    notifications,
    productList,
    profile,
    register,
  } = SCREENS;
  if (name === homepage) {
    return <Icon name="home" size={focused ? 30 : 25} color={color} />;
  }
  if (name === categories) {
    return <Category2 variant="Bold" size={focused ? 30 : 25} color={color} />;
  }
  if (name === cart) {
    return <Icon name="shopping-cart" size={focused ? 30 : 25} color={color} />;
  }
  if (name === favourites) {
    return <IconMat name="favorite" size={focused ? 30 : 25} color={color} />;
  }
  if (name === login) {
    return (
      <Login
        variant="Bold"
        name="login"
        size={focused ? 30 : 25}
        color={color}
      />
    );
  }
  if (name === notifications) {
    return (
      <NotificationBing variant="Bold" size={focused ? 30 : 25} color={color} />
    );
  }
  if (name === productList) {
    return <Icon name="th-list" size={focused ? 30 : 25} color={color} />;
  }
  if (name === profile) {
    return (
      <ProfileCircle variant="Bold" size={focused ? 30 : 25} color={color} />
    );
  }
  if (name === register) {
    return (
      <MessageEdit variant="Bold" size={focused ? 30 : 25} color={color} />
    );
  }
};

export default TabIcon;
