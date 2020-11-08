import { StyleSheet } from 'react-native';
import { colors } from 'app/theme';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  safeAreaView: {
    backgroundColor: colors.offwhite,
    flex: 1,
  },
});

export default styles;
