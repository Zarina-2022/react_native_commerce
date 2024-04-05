import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/constants';
import {COLORS} from '../../thema/colors';

export const introstyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: width - 40,
    height: height / 4,
    resizeMode: 'cover',
  },
  shopBtn: {
    position: 'absolute',
    top: 30,
    left: 20,
    backgroundColor: COLORS.orange,
    width: width * 0.23,
    height: height * 0.04,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shopBtnText: {
    color: COLORS.black,
    fontWeight: 'bold',
  },
});
