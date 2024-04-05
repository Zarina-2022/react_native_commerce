import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {getRequest} from '../../api/http-requests';
import {CATEGORY_URL} from '../../api/urls';

// import components
import ProductsCards from '../../components/widgets/products-cards';
import WidgetTitle from '../../components/widgets/widget-title';

const NewArrival = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    // how to give limit to an array:
    getRequest(CATEGORY_URL + "/women's clothing", {limit: 5})
      .then(res => {
        setCategory(res.data);
      })
      .catch(err => {
        console.log('ERROR>>>', err.message);
      });
  }, []);

  return (
    <View>
      <WidgetTitle title={'New Arrival'} category="women's clothing" />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={category}
        renderItem={({item}) => <ProductsCards item={item} />}
      />
    </View>
  );
};

export default NewArrival;
