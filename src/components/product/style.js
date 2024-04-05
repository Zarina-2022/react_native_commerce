import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/constants';
import {COLORS} from '../../thema/colors';

export const productListStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: width / 2,
    paddingHorizontal: 5,
    marginVertical: 20,
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: width * 0.25,
    height: height * 0.15,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 5,
    fontSize: 12,
    color: COLORS.black,
  },
  category: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.black,
  },
  price: {
    fontWeight: 'bold',
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.darkGreen,
  },
  adjustment: {
    flex: 1,
  },
  columns: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favouriteIcon: {
    flex: 1,
  },
});
