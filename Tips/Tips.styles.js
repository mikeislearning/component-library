/* eslint-disable react-native/sort-styles */
import { StyleSheet } from 'react-native';
import { colors, fonts } from 'app/theme';

const styles = StyleSheet.create({
  bulbIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
    marginTop: 5,
  },
  closeIcon: {
    height: 10,
    width: 10,
  },
  closeIconContainer: {
    alignItems: 'center',
    height: 44,
    justifyContent: 'center',
    marginTop: -15,
    width: 44,
  },
  container: {
    marginBottom: 13,
    flexDirection: 'row',
  },
  containerDismissable: {
    borderBottomColor: colors.gray.light,
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingTop: 18,
  },
  iconContainer: {
    alignSelf: 'flex-start',
    width: 30,
    marginBottom: 3,
  },
  text: {
    color: colors.arriveBlack,
    flex: 1,
    marginLeft: 15,
    fontFamily: fonts.family.messinaSans.regularItalic,
    fontStyle: 'italic',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 25,
  },
});

export default styles;
