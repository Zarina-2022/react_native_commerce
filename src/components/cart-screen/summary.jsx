import {Alert, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {summaryStyles} from './style';
import Button from '../ui/button';
import {StoreContext} from '../../context/provider';
import {SCREENS} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';

const Summary = () => {
  const {isLogin} = useContext(StoreContext);
  const navigation = useNavigation();
  const {checkout, login} = SCREENS;

  const checkoutScreen = () => {
    if (isLogin) {
      navigation.navigate(checkout);
    } else {
      Alert.alert('Please, login', 'To buy a product you must first login', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => navigation.navigate(login),
        },
      ]);
    }
  };
  return (
    <View style={summaryStyles.container}>
      <View style={summaryStyles.summaryWrapper}>
        <Text style={summaryStyles.textLeft}>Subtotal:</Text>
        <Text style={summaryStyles.textRight}>800</Text>
      </View>

      <View style={summaryStyles.summaryWrapper}>
        <Text style={summaryStyles.textLeft}>Delivery Fee:</Text>
        <Text style={summaryStyles.textRight}>800</Text>
      </View>

      <View style={summaryStyles.summaryWrapper}>
        <Text style={summaryStyles.textLeft}>Discount:</Text>
        <Text style={summaryStyles.textRight}>800</Text>
      </View>

      <View style={summaryStyles.summaryTotal}>
        <Text style={summaryStyles.textLeft}>Total:</Text>
        <Text style={summaryStyles.textRight}>800</Text>
      </View>

      <Button onPress={checkoutScreen} title="To checkout" />
    </View>
  );
};

export default Summary;
