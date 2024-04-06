import {Text, TouchableOpacity, View} from 'react-native';
import {emptyListStyle} from './style';

const EmptyItemList = ({title1, title2, btn, icon, onPress}) => {

  return (
    <View style={emptyListStyle.container}>
      <View>{icon}</View>

      <Text style={emptyListStyle.text1}>{title1}</Text>
      <Text style={emptyListStyle.text2}>{title2}</Text>

      <TouchableOpacity
        onPress={onPress}
        style={emptyListStyle.btn}>
        <Text style={emptyListStyle.btnText}>{btn}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyItemList;
