import { StyleSheet } from 'react-native';
import { colors, fonts } from 'app/theme';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  dateTimeContainer: {
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderRadius: 8,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  dateTimeContainerEmpty: {
    backgroundColor: colors.gray.light,
    borderColor: colors.gray.medium,
  },
  dateTimeText: {
    color: colors.black,
    fontFamily: fonts.family.messinaSans.regular,
    fontSize: 16,
  },
  dateTimeTextEmpty: {
    color: colors.gray.medium,
    fontFamily: fonts.family.messinaSans.lightItalic,
  },
  errorInput: {
    borderColor: colors.red.light,
  },
  placeholder: {
    color: colors.gray.medium,
  },
});

export default styles;
