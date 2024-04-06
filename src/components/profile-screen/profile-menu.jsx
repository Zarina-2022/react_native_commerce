import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {menuStyles} from './style';
import {ArrowRight2, Card, Heart, Location, Notification, UserEdit} from 'iconsax-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../thema/colors';

const ProfileMenu = () => {
  const buttons = [
    {
      title: 'Edit Profile',
      icon: <UserEdit size="25" color={COLORS.gray} variant="Bold" />,
      route: '',
    },
    {
      title: 'Shopping Address',
      icon: <Location size="25" color={COLORS.gray} variant="Bold" />,
      route: '',
    },
    {
        title: 'Wishlist',
        icon: <Heart size="24" color={COLORS.gray} variant="Bold" />,
        route: '',
      },
      {
        title: 'Order History',
        icon: <Icon name="history" size={23} color={COLORS.gray} />,
        route: '',
      },
      {
        title: 'Notifications',
        icon: <Notification size="25" color={COLORS.gray} variant="Bold" />,
        route: '',
      },
      {
        title: 'Cards',
        icon: <Card size="25" color={COLORS.gray} variant="Bold" />,
        route: '',
      },
  ];
  return (
    <View style={menuStyles.container}>
      {buttons.map((item, index) => (
        <TouchableOpacity key={index} style={menuStyles.btn}>
          <View style={menuStyles.infoWrapper}>
            {item.icon}
            <Text style={menuStyles.text}>{item.title}</Text>
          </View>
          <ArrowRight2 size="20" color={COLORS.gray} variant="Outline" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ProfileMenu;
