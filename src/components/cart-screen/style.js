import {StyleSheet} from 'react-native';
import {COLORS} from '../../thema/colors';
import {height, width} from '../../utils/constants';

export const badgeStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center',
  },
  cart: {
    marginRight: 15,
  },
  badge: {
    backgroundColor: COLORS.orange,
    justifyContent: 'center',
    alignItems: 'center',
    width: 16,
    height: 16,
    borderRadius: 50,
    position: 'absolute',
    top: -9,
    right: -9,
    zIndex: 99,
  },
  badgeText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
});

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

export const summaryStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: COLORS.lightGray,
  },
  summaryWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginVertical: 7,
  },
  textRight: {
    fontWeight: '700',
  },
  textLeft: {
    color: COLORS.gray,
  },
  summaryTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingBottom: 20,
    paddingTop: 40,
  },
});
