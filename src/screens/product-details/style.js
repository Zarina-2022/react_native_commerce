import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../thema/colors';
import {height, width} from '../../utils/constants';

export const productDetailStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  body: {
    padding: 10,
    width: '100%',
    height: Dimensions.get('window').height,
  },
  cart: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 25,
    width: width,
    borderTopWidth: 1,
    borderColor: COLORS.lightGray,
    backgroundColor: COLORS.white,
  },
  btn1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn2: {
    flex: 2,
    justifyContent: 'center',
  },
  img: {
    width: width,
    height: height * 0.3,
    resizeMode: 'contain',
  },

  columns: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flex: 3,
  },
  left: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 10,
    fontSize: 18,
    color: COLORS.black,
  },
  category: {
    fontSize: 14,
    color: COLORS.gray,
  },
  price: {
    fontWeight: 'bold',
    marginVertical: 5,
    fontSize: 18,
    color: COLORS.black,
  },
  priceWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginVertical: 10,
  },
  discount: {
    fontWeight: 'bold',
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.orange,
    textDecorationLine: 'line-through',
  },
  rating: {
    fontWeight: 'bold',
    color: COLORS.lightOrange,
    fontSize: 14,
  },
  ratingColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    marginVertical: 10,
  },
  stars: {
    flexDirection: 'row',
  },
  description: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
});
