import {StyleSheet} from 'react-native';
import {COLORS} from '../../thema/colors';

export const categoryListStyle = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  inactiveList: {
    padding: 12,
    backgroundColor: COLORS.lightGray,
    marginRight: 8,
    borderRadius: 100,
  },
  activeList: {
    padding: 12,
    backgroundColor: COLORS.orange,
    marginRight: 8,
    borderRadius: 100,
  },
});
