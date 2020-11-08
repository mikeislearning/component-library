/* eslint-disable react-native/sort-styles */
import { StyleSheet } from 'react-native';
import { colors } from 'app/theme';

const SMALL_SIZE = 30;
const MEDIUM_SIZE = 50;
const LARGE_SIZE = 70;
const XLARGE_SIZE = 100;
const MASSIVE_SIZE = 160;

const styles = StyleSheet.create({
  large: {
    height: LARGE_SIZE,
    width: LARGE_SIZE,
  },
  massive: {
    height: MASSIVE_SIZE,
    width: MASSIVE_SIZE,
  },
  medium: {
    height: MEDIUM_SIZE,
    width: MEDIUM_SIZE,
  },
  small: {
    height: SMALL_SIZE,
    width: SMALL_SIZE,
  },
  xlarge: {
    height: XLARGE_SIZE,
    width: XLARGE_SIZE,
  },
  image: {
    alignItems: 'center',
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  container: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.gray.light,
    borderRadius: MASSIVE_SIZE,
  },
});

export default styles;
