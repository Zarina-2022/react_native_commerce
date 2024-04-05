import {FlatList, View} from 'react-native';
import React from 'react';
import {widgets} from '../../widgets';
import {screenstyles} from '../../styles/screen-styles';

const Homepage = () => {
  const renderItem = ({item}) => {
    return <View>{item.isShown && item.component}</View>;
  };
  return (
    <View style={screenstyles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={widgets}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Homepage;
