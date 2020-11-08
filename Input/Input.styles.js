import { StyleSheet } from 'react-native';

import { colors, fonts } from 'app/theme';

const styles = StyleSheet.create({
  errorInput: {
    borderColor: colors.red.light,
  },
  hasBorder: {
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: 1,
  },
  hasBottomMargin: {
    marginBottom: 10,
  },
  icon: {
    height: 12,
    width: 18,
  },
  iconContainer: {
    paddingHorizontal: 17,
    paddingVertical: 19,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 8,
    color: colors.black,
    fontFamily: fonts.family.messinaSans.regular,
    fontSize: 16,
    height: 50,
    paddingBottom: 0,
    paddingHorizontal: 10,
    paddingTop: 0,
    textAlignVertical: 'center',
  },
  inputContainer: {
    position: 'relative',
  },
  inputEmpty: {
    backgroundColor: colors.gray.light,
    borderColor: colors.gray.medium,
    fontFamily: fonts.family.messinaSans.lightItalic,
  },
  multiline: {
    height: 100,
    lineHeight: 22,
    paddingHorizontal: 14,
    paddingVertical: 15,
    textAlignVertical: 'top',
  },
  multilineContainer: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingBottom: 10,
    paddingHorizontal: 1,
    paddingTop: 15,
  },
});

export default styles;
