import { StyleSheet } from 'react-native';
import { colors, fonts } from 'app/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 50,
    padding: 50,
  },
  text: {
    color: colors.arriveBlack,
    fontFamily: fonts.family.messinaSans.regular,
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default styles;
