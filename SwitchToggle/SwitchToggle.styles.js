import { StyleSheet } from 'react-native';
import { colors, fonts } from 'app/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 20,
  },
  label: {
    color: colors.gray.medium,
    fontFamily: fonts.family.messinaSans.regular,
    fontSize: 15,
    paddingLeft: 20,
  },
  labelActive: {
    color: colors.black,
  },
});

export default styles;
