import { StyleSheet } from 'react-native';
import { colors, fonts } from 'app/theme';

const styles = StyleSheet.create({
  closeText: {
    color: colors.blue,
    fontFamily: fonts.family.messinaSans.regular,
    fontSize: 16,
    padding: 18,
  },
  container: {
    flex: 1,
    paddingBottom: 20,
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  description: {
    color: colors.gray.medium,
    fontSize: 12,
    textAlign: 'left',
  },
  dismissButtonSeparator: {
    backgroundColor: colors.gray.medium,
    height: 3,
    marginHorizontal: 12,
    marginTop: 9,
    width: 3,
  },
  dismissButtonText: {
    color: colors.gray.medium,
    fontSize: 15,
  },
  dismissButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 18,
  },
  emoji: {
    height: 40,
    width: 40,
  },
  emojiList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 40,
  },
  emojiSmall: {
    height: 30,
    width: 30,
  },
  sentIcon: {
    height: 83,
    marginBottom: 34,
    width: 83,
  },
  subTitle: {
    marginTop: 25,
  },
  submittedContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 25,
  },
  text: {
    color: colors.arriveBlack,
    fontFamily: fonts.family.messinaSans.regular,
    fontSize: 16,
    textAlign: 'center',
  },
  title: {
    fontFamily: fonts.family.messinaSans.semiBold,
    fontSize: 22,
  },
});

export default styles;
