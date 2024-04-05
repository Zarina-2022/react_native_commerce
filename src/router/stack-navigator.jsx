import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Util imports
import {SCREENS} from '../utils/routes';

import {COLORS} from '../thema/colors';

// Nested navigation imports
import TabNavigator from './tab-navigator';

// Screen imports
import Cart from '../screens/cart';
import Notifications from '../screens/notifications';
import ProductList from '../screens/product-list';
import Login from '../screens/login';
import Register from '../screens/register';
import ProductDetails from '../screens/product-details';
import HeaderTabIcons from '../components/router/header-tab-icons';
import Checkout from '../screens/checkout';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  // destructuring = unpack value or properties from object or array
  const {
    tabNavigator,
    cart,
    login,
    notifications,
    productList,
    register,
    productDetails,
    checkout,
  } = SCREENS;

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: COLORS.blue,
        headerTitleAlign: 'center',
        headerTitleStyle: {textTransform: 'uppercase'},
      }}
      initialRouteName={TabNavigator}>
      <Stack.Screen
        options={{headerShown: false}}
        name={tabNavigator}
        component={TabNavigator}
      />
      <Stack.Screen name={login} component={Login} />
      <Stack.Screen name={checkout} component={Checkout} />
      <Stack.Screen name={cart} component={Cart} />
      <Stack.Screen name={notifications} component={Notifications} />
      <Stack.Screen
        options={({route, navigation}) => ({
          //header right icons (search & cart):
          headerRight: () => <HeaderTabIcons />,
          title: route?.params?.title,
        })}
        name={productList}
        component={ProductList}
      />
      <Stack.Screen name={register} component={Register} />
      <Stack.Screen
        options={{
          //header right icons (search & cart):
          headerRight: () => <HeaderTabIcons />,
        }}
        name={productDetails}
        component={ProductDetails}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
