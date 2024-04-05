import {Text, TouchableOpacity, View} from 'react-native';
import {emptyListStyle} from './style';
import {HeartCircle} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/routes';

const EmptyItemList = ({title1, title2, category}) => {
  const navigation = useNavigation();
  const {productList} = SCREENS;

  return (
    <View style={emptyListStyle.container}>
      <HeartCircle size="295" color="#FF8A65" variant="Bulk" />

      <Text style={emptyListStyle.text1}>{title1}</Text>
      <Text style={emptyListStyle.text2}>{title2}</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate(productList, {category: category})}
        style={emptyListStyle.btn}>
        <Text style={emptyListStyle.btnText}>START EXPLORING</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyItemList;
