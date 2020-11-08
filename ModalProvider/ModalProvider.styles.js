/* eslint-disable */

import { StyleSheet } from 'react-native';

import { colors } from 'app/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 3,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 100,
    paddingHorizontal: 20,
    paddingTop: 40,
    shadowColor: colors.black,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  scrollView: {
    backgroundColor: colors.semiTransparent,
    flex: 1,
  },
});

export default styles;
