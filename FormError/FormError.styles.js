import { StyleSheet } from 'react-native';

import { colors, fonts } from 'app/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 1,
  },
  icon: {
    height: 16,
    marginTop: 3,
    width: 16,
  },
  text: {
    color: colors.red.light,
    fontFamily: fonts.family.messinaSans.regular,
    fontSize: 16,
    marginLeft: 3,
    marginTop: 2,
  },
});

export default styles;
