import { StyleSheet } from 'react-native';
import { fonts } from 'app/theme';

export default StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    position: 'relative',
  },
  sectionHeader: {
    fontSize: fonts.size.medium,
    fontFamily: fonts.family.messinaSans.regular,
  },
});
