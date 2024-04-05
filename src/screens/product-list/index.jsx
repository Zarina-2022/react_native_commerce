import {FlatList, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {PRODUCTS_URL} from '../../api/urls';
import {getRequest} from '../../api/http-requests';
import ProductsListCard from '../../components/product/product-card';
import Spinner from '../../components/ui/spinner';
import CategoryList from '../../components/widgets/category-list';
import {productListStyle} from './style';

const ProductList = ({route}) => {
  const [products, setProducts] = useState([]);
  const [pending, setPending] = useState(false); // is loading for spinner
  const [selectedCategory, setSelectedCategory] = useState(null);

  // home screen de see all tiklaninca tum kategoriler degil de sadece tek kategori uzunleri listelenecek.
  const filterCategory = route.params.category;

  useEffect(() => {
    setPending(true);
    getRequest(PRODUCTS_URL)
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.log('ERROR>>>', err.message);
      })
      .finally(() => {
        setPending(false);
      });
  }, []);

  const handleCategoryPress = value => {
    // Update the selected category
    setSelectedCategory(value);
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : filterCategory
    ? products.filter(product => product.category === filterCategory)
    : products;

  return (
    <View style={productListStyle.container}>
      <CategoryList handleOnPress={handleCategoryPress} />
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 50}}
          numColumns={2}
          data={filteredProducts}
          renderItem={({item}) => <ProductsListCard item={item} />}
        />
      )}
    </View>
  );
};

export default ProductList;
