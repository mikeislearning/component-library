import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from 'app/theme';

const styles = StyleSheet.create({
  carouselText: {
    color: colors.arriveBlack,
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },
  fullImage: {
    height: 250,
    marginBottom: 29,
    marginTop: 24,
    width: metrics.screenWidth,
  },
  fullText: {
    paddingHorizontal: 15,
  },
  image: {
    height: 150,
    marginBottom: 29,
    marginTop: 24,
  },
  item: {
    alignItems: 'center',
    flex: 1,
  },
  modalText: {
    paddingHorizontal: 20,
  },
  subtitle: {
    fontFamily: fonts.family.messinaSans.light,
    fontSize: fonts.size.h5,
  },
  text: {
    fontFamily: fonts.family.messinaSans.regular,
    fontSize: 15,
    lineHeight: 22,
  },
  title: {
    fontFamily: fonts.family.messinaSans.regular,
    fontSize: fonts.size.large,
  },
});

export default styles;
