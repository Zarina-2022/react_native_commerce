import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {SCREENS} from '../utils/routes';
import {COLORS} from '../thema/colors';

// import components
import TabIcon from '../components/router/tab-icon';
import HeaderTabIcons from '../components/router/header-tab-icons';

// import screens
import Categories from '../screens/categories';
import Favourites from '../screens/favourites';
import Homepage from '../screens/homepage';
import Profile from '../screens/profile';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const {categories, favourites, homepage, profile} = SCREENS;
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        //tab bottom icons:
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            focused={focused}
            color={color}
            size={size}
            name={route?.name}
            route={route}
          />
        ),

        //header right icons (search & cart):
        headerRight: ({focused, color, size}) => <HeaderTabIcons />,

        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.blue,
        tabBarActiveTintColor: COLORS.orange,

        //Background style:
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopColor: COLORS.gray,
          paddingVertical: 2,
          paddingHorizontal: 5,
        },
        headerTitleAlign: 'center',
      })}
      initialRouteName={homepage}>
      <Tab.Screen name={homepage} component={Homepage} />
      <Tab.Screen name={categories} component={Categories} />
      <Tab.Screen name={favourites} component={Favourites} />
      <Tab.Screen name={profile} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
