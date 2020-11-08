import { StyleSheet } from 'react-native';
import { colors } from 'app/theme';

const styles = (currentProgress) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      marginBottom: 30,
    },
    progressBar: {
      width: 280,
      height: 10,
      backgroundColor: colors.gray.light,
      borderRadius: 25,
    },
    currentProgressBar: {
      width: currentProgress * 40,
      height: 10,
      backgroundColor: colors.red.medium,
      borderBottomLeftRadius: 25,
      borderTopLeftRadius: 25,
    },
    progressBarText: {
      fontSize: 16,
    },
  });

export default styles;
