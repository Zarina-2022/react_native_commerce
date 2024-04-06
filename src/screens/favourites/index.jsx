import {FlatList, View} from 'react-native';
import React, {useContext} from 'react';
import {screenstyles} from '../../styles/screen-styles';
import {favouriteStyle} from './style';
import {StoreContext} from '../../context/provider';
import FavouritesCard from '../../components/favourites-screen/favourites-card';
import EmptyItemList from '../../components/ui/empty-item-list';
import {HeartCircle} from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../utils/routes';

const Favourites = ({category}) => {
  const {favourites} = useContext(StoreContext);
  const navigation = useNavigation();
  const {productList} = SCREENS;

  return (
    <View style={screenstyles.container}>
      <View style={favouriteStyle.cartWrapper}>
        <FlatList
          ListEmptyComponent={() => (
            <EmptyItemList
              icon={<HeartCircle size="295" color="#FF8A65" variant="Bulk" />}
              title1={'No favourites yet!'}
              title2={
                'Like a product you see? Save them here to your favourites.'
              }
              onPress={() => navigation.navigate(productList, {category: category})}
              btn={'START EXPLORING'}
            />
          )}
          style={favouriteStyle.container}
          showsVerticalScrollIndicator={false}
          data={favourites}
          renderItem={({item}) => <FavouritesCard item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Favourites;
