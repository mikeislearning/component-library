import { StyleSheet } from 'react-native';
import { colors } from 'app/theme';

export default StyleSheet.create({
  pillButtonContainer: {
    backgroundColor: colors.white,
    borderRadius: 30,
    borderColor: colors.gray.medium,
    borderWidth: 1,
    margin: 5,
    padding: 16,
    alignSelf: 'center',
  },
  selectedPillButton: {
    backgroundColor: colors.green.light,
    borderColor: colors.green.dark,
    borderWidth: 2,
    padding: 15,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  text: {
    color: colors.gray.medium,
    fontSize: 14,
    alignSelf: 'center',
  },
  selectedText: {
    color: colors.black,
    fontWeight: '600',
  },
});
