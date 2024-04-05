import {FlatList, View} from 'react-native';
import React, {useContext} from 'react';
import {screenstyles} from '../../styles/screen-styles';
import {favouriteStyle} from './style';
import {StoreContext} from '../../context/provider';
import FavouritesCard from '../../components/favourites/favourites-card';
import EmptyItemList from '../../components/ui/empty-item-list';

const Favourites = () => {
  const {favourites} = useContext(StoreContext);
  return (
    <View style={screenstyles.container}>
      <View style={favouriteStyle.cartWrapper}>
        <FlatList
          ListEmptyComponent={() => (
            <EmptyItemList
              title1={"No favourites yet!"}
              title2={'Like a product you see? Save them here to your favourites.'}
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
