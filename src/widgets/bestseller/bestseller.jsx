import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {getRequest} from '../../api/http-requests';
import {CATEGORY_URL} from '../../api/urls';

// import components
import ProductsCards from '../../components/widgets/products-cards';
import WidgetTitle from '../../components/widgets/widget-title';
import CategoryList from '../../components/widgets/category-list';

const Bestseller = () => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("men's clothing");

  useEffect(() => {
    // Fetch products of the selected category, give a limit to an array, sort according to id:
    getRequest(CATEGORY_URL + `/${selectedCategory}`, {limit: 5, sort: 'asc'})
      .then(res => {
        setCategory(res.data);
      })
      .catch(err => {
        console.log('ERROR>>>', err.message);
      });
  }, [selectedCategory]); // Fetch products when selectedCategory changes

  const handleCategoryPress = value => {
    // Update the selected category
    setSelectedCategory(value);
  };

  return (
    <View>
      <WidgetTitle title={'Bestsellers'} category="men's clothing" />
      <CategoryList handleOnPress={handleCategoryPress} />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={category}
        renderItem={({item}) => <ProductsCards item={item} />}
      />
    </View>
  );
};

export default Bestseller;
