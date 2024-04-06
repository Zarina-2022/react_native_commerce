import {Text, View, Image, Pressable} from 'react-native';
import {cartStyles} from './style';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/routes';

const FavouritesCard = ({item}) => {
  const navigation = useNavigation();
  const {productDetails} = SCREENS;
  return (
    <Pressable
      onPress={() => navigation.navigate(productDetails, {item: item})}
      style={cartStyles.container}>
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
    </Pressable>
  );
};

export default FavouritesCard;
