import {StyleSheet} from 'react-native';
import {COLORS} from '../../thema/colors';
import {height} from '../../utils/constants';

export const categoryCardStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    padding: 10,
    minHeight: height / 8,
    justifyContent: 'center',
    marginVertical: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    textTransform: 'capitalize',
  },
});
