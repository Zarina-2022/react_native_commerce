import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {categoriesStyle} from './style';
import {getRequest} from '../../api/http-requests';
import {CATEGORIES_URL} from '../../api/urls';

const CategoryList = ({handleOnPress}) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    getRequest(CATEGORIES_URL)
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const selectCategory = pressedCategory => {
    setSelectedCategory(pressedCategory);
    handleOnPress(pressedCategory);
  };

  const renderItems = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => selectCategory(item)}
        style={
          selectedCategory === item
            ? categoriesStyle.activeList
            : categoriesStyle.inactiveList
        }>
        <Text style={categoriesStyle.text}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={categoriesStyle.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={renderItems}
        keyExtractor={(item, index) => index.toString()} // Added keyExtractor
      />
    </View>
  );
};

export default CategoryList;
