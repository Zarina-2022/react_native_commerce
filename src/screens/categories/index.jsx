import {FlatList, Pressable, Touchable, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CATEGORIES_URL} from '../../api/urls';
import {getRequest} from '../../api/http-requests';
import CategoryCard from '../../components/categories-screen/category-card';
import {screenstyles} from '../../styles/screen-styles';
import Spinner from '../../components/ui/spinner';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [pending, setPending] = useState(false); // is loading for spinner

  useEffect(() => {
    setPending(true);
    getRequest(CATEGORIES_URL)
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setPending(false);
      });
  }, []);

  return (
    <View style={screenstyles.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({item}) => <CategoryCard item={item} />}
          keyExtractor={(item, index) => index.toString()} // Added keyExtractor
        />
      )}
    </View>
  );
};

export default Categories;
