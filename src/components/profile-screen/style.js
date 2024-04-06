import {StyleSheet} from 'react-native';
import {COLORS} from '../../thema/colors';
import {height, width} from '../../utils/constants';

export const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },

  infoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginVertical: 15,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export const infoStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  image: {
    width: width * 0.40,
    height: height * 0.20,
    resizeMode: 'contain',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  job: {
    fontSize: 14,
    marginTop: 5,
  },
});
