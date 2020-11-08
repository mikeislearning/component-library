import { StyleSheet } from 'react-native';
import { colors, fonts } from 'app/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  editIcon: {
    height: 10,
    marginRight: 5,
    marginTop: 2,
    width: 10,
  },
  text: {
    color: colors.blue,
    fontFamily: fonts.family.messinaSans.regular,
    fontSize: fonts.size.small,
  },
});

export default styles;
