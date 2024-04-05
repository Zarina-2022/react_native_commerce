import {StyleSheet} from 'react-native';
import {COLORS} from '../../thema/colors';
import {height, width} from '../../utils/constants';

export const widgetTitlestyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  btn: {
    color: COLORS.gray,
    fontWeight: 'bold',
  },
});

export const widgetProductsStyles = StyleSheet.create({
  container: {
    width: width * 0.4,
    paddingHorizontal: 5,
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

export const categoriesStyle = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
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
