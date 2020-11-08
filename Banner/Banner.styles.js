import { StyleSheet } from 'react-native';
import { colors } from 'app/theme';

const CIRCLE_SMALL = 156;
const CIRCLE_MEDIUM = 226;
const CIRCLE_LARGE = 376;

const styles = StyleSheet.create({
  banner: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    height: 57,
    position: 'relative',
  },
  circle: {
    borderColor: colors.white,
    borderRadius: CIRCLE_LARGE,
    borderWidth: 1,
    left: '50%',
    position: 'absolute',
  },
  circleGray: {
    borderColor: colors.gray.light,
  },
  circleLarge: {
    bottom: -CIRCLE_LARGE / 2,
    height: CIRCLE_LARGE,
    marginLeft: -CIRCLE_LARGE / 2,
    width: CIRCLE_LARGE,
  },
  circleMedium: {
    bottom: -CIRCLE_MEDIUM / 2,
    height: CIRCLE_MEDIUM,
    marginLeft: -CIRCLE_MEDIUM / 2,
    width: CIRCLE_MEDIUM,
  },
  circleRed: {
    borderColor: colors.red.medium,
  },
  circleSmall: {
    bottom: -CIRCLE_SMALL / 2,
    height: CIRCLE_SMALL,
    marginLeft: -CIRCLE_SMALL / 2,
    width: CIRCLE_SMALL,
  },
  container: {
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    zIndex: 1,
  },
  goldBanner: {
    backgroundColor: colors.gold.medium,
  },
  linearGradient: {
    flex: 1,
    height: 100,
    left: 0,
    position: 'absolute',
    top: -43, // This is to cover iPhoneX safe area
    width: '100%',
  },
  otherBanner: {
    backgroundColor: colors.white,
    borderBottomColor: colors.gray.light,
    borderBottomWidth: 1,
  },
  redBanner: {
    backgroundColor: colors.red.medium,
  },
});

export default styles;
