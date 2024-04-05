import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/constants';
import {COLORS} from '../../thema/colors';

export const loginStyle = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  image: {
    width: width * 0.3,
    height: height * 0.2,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  input: {
    marginVertical: 10,
  },
  buttonWrapper: {
    marginVertical: 20,
  },
  button: {
    marginVertical: 10,
  },
  errorText: {
    color: COLORS.red,
    marginTop: 20,
    textAlign: 'center',
  },
});
