import { StyleSheet } from 'react-native';
import { colors, fonts } from 'app/theme';

const styles = StyleSheet.create({
  arrowDropdown: {
    height: 8,
    right: 10,
    top: 22,
    width: 8,
  },
  errorInput: {
    borderColor: colors.red.light,
  },
  input: {
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderRadius: 8,
    borderWidth: 1,
    color: colors.black,
    fontFamily: fonts.family.messinaSans.regular,
    fontSize: 16,
    height: 50,
    minWidth: 130,
    paddingHorizontal: 10,
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputEmpty: {
    backgroundColor: colors.gray.light,
    borderColor: colors.gray.medium,
    fontFamily: fonts.family.messinaSans.lightItalic,
  },
  placeholder: {
    color: colors.gray.medium,
  },
});

export default styles;
