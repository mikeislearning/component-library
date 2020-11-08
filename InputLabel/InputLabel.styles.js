import { StyleSheet } from 'react-native';
import { colors, fonts } from 'app/theme';

const styles = StyleSheet.create({
  hasTopMargin: {
    marginTop: 30,
  },
  label: {
    color: colors.gray.medium,
    fontFamily: fonts.family.messinaSans.regular,
    fontSize: 15,
    lineHeight: 16,
    marginBottom: 5,
  },
});

export default styles;
