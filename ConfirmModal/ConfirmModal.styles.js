import { StyleSheet } from 'react-native';

import { colors, fonts } from 'app/theme';

const styles = StyleSheet.create({
  button: {
    fontSize: 16,
    paddingVertical: 2,
  },
  buttonsContainer: {
    marginTop: 20,
    width: 245,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 8,
    marginHorizontal: 10,
    paddingBottom: 30,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  description: {
    fontSize: 15,
    marginTop: 20,
    textAlign: 'center',
  },
  modalContainer: {
    backgroundColor: colors.semiTransparent,
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: colors.arriveBlack,
    fontFamily: fonts.family.messinaSans.regular,
    fontSize: fonts.size.large,
  },
});

export default styles;
