import {StyleSheet} from 'react-native';
import {COLORS} from '../../thema/colors';
import {height, width} from '../../utils/constants';

export const spinnerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const buttonStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    paddingVertical: 10,
  },
  text: {
    fontWeight: 'bold',
  },
});

export const counterStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightGray,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textContainer: {
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
  icon: {
    width: width * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconSelf: {
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
