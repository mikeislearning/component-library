import { StyleSheet } from 'react-native';
import { colors } from 'app/theme';

const SIZE_SMALL = 21;
const SIZE_LARGE = 41;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: colors.blue,
    borderRadius: SIZE_LARGE,
    borderWidth: 1,
    height: SIZE_LARGE,
    justifyContent: 'center',
    width: SIZE_LARGE,
  },
  containerSmall: {
    height: SIZE_SMALL,
    width: SIZE_SMALL,
  },
  icon: {
    backgroundColor: colors.white,
    height: 20,
    width: 20,
  },
  iconSmall: {
    height: 12,
    width: 12,
  },
});

export default styles;
