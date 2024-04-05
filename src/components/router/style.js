import {StyleSheet} from 'react-native';
import {COLORS} from '../../thema/colors';

export const navIconStyles = StyleSheet.create({
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
