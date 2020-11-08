import { StyleSheet } from 'react-native';
import { colors, fonts } from 'app/theme';

const bottomPadding = 12;

const styles = StyleSheet.create({
  closeIcon: {
    height: 17,
    width: 17,
  },
  container: {
    alignItems: 'flex-end',
    backgroundColor: colors.offwhite,
    borderBottomColor: colors.gray.light,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 57,
    justifyContent: 'center',
    paddingBottom: bottomPadding,
  },
  leftActionContainer: {
    bottom: bottomPadding,
    left: 0,
    paddingBottom: 5,
    paddingLeft: 20,
    position: 'absolute',
  },
  loadingContainer: {
    bottom: 0,
    padding: 0,
  },
  rightActionContainer: {
    bottom: bottomPadding,
    paddingRight: 20,
    position: 'absolute',
    right: 0,
  },
  rightActionDisabled: {
    color: colors.gray.medium,
  },
  rightActionText: {
    color: colors.blue,
    fontFamily: fonts.family.messinaSans.semiBold,
    fontSize: 18,
    lineHeight: 24,
  },
  title: {
    color: colors.black,
    fontFamily: fonts.family.messinaSans.regular,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
  },
});

export default styles;
