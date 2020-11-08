import { StyleSheet } from 'react-native';

import { colors, fonts } from 'app/theme';

const styles = StyleSheet.create({
  bordered: {
    backgroundColor: colors.white,
    borderColor: colors.blue,
    borderWidth: 1,
    padding: 14,
  },
  borderedText: {
    color: colors.blue,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    borderRadius: 6,
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: colors.gray.light,
    borderColor: colors.gray.light,
  },
  disabledText: {
    color: colors.gray.medium,
  },
  fullWidth: {
    width: '100%',
  },
  primary: {
    backgroundColor: colors.blue,
    borderColor: colors.blue,
    borderWidth: 1,
    padding: 15,
  },
  primaryText: {
    color: colors.white,
    textAlign: 'center',
  },
  quaternary: {
    backgroundColor: colors.white,
  },
  quaternaryText: {
    color: colors.purple,
    fontSize: 17,
    textAlign: 'center',
  },
  secondary: {
    backgroundColor: colors.white,
    borderColor: colors.gray.light,
    borderWidth: 1,
    padding: 15,
  },
  secondaryText: {
    color: colors.black,
  },
  tertiary: {
    backgroundColor: colors.gray.light,
    borderColor: colors.gray.light,
    borderWidth: 1,
    padding: 8,
  },
  tertiaryText: {
    color: colors.black,
  },
  text: {
    fontFamily: fonts.family.messinaSans.regular,
    fontSize: 16,
  },
  transparent: {
    backgroundColor: colors.transparent,
    padding: 12,
  },
  transparentText: {
    color: colors.gray.medium,
  },
});

export default styles;
