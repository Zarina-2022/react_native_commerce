import {StyleSheet} from 'react-native';
import {COLORS} from '../../thema/colors';
import {height, width} from '../../utils/constants';

export const cartStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  container1: {
    flex: 0.5,
    marginHorizontal: 5,
  },
  image: {
    width: width * 0.1,
    height: height * 0.1,
    resizeMode: 'contain',
  },
  container2: {
    flex: 3,
    paddingHorizontal: 5,
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 3,
    fontSize: 12,
    color: COLORS.black,
  },
  category: {
    marginVertical: 3,
    fontSize: 14,
    color: COLORS.black,
    textTransform: 'capitalize',
  },
  price: {
    fontWeight: 'bold',
    marginVertical: 3,
    fontSize: 14,
    color: COLORS.darkGreen,
  },
  container3: {
    flex: 1,
    marginHorizontal: 5,
    alignSelf: 'flex-end',
  },
});
