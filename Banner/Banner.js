import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { PropTypes } from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from 'app/theme';

import styles from './Banner.styles';

export default class Banner extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    isOtherUserProfile: PropTypes.bool,
    role: PropTypes.string,
  };

  static defaultProps = {
    isOtherUserProfile: false,
    role: 'user',
  };

  render() {
    const { children, isOtherUserProfile, role } = this.props;
    const isAmbassador = role === 'ambassador';

    const bannerStyles = [styles.banner];
    const containerStyles = [styles.container];
    const circleSmallStyles = [styles.circle, styles.circleSmall];
    const circleMediumStyles = [styles.circle, styles.circleMedium];
    const circleLargeStyles = [styles.circle, styles.circleLarge];

    if (isAmbassador) {
      bannerStyles.push(styles.goldBanner);
      containerStyles.push(styles.goldBanner);
    } else {
      if (isOtherUserProfile) {
        bannerStyles.push(styles.otherBanner);
        containerStyles.push(styles.otherBanner);
        circleSmallStyles.push(styles.circleRed);
        circleMediumStyles.push(styles.circleGray);
        circleLargeStyles.push(styles.circleRed);
      } else {
        bannerStyles.push(styles.redBanner);
        containerStyles.push(styles.redBanner);
      }
    }

    return (
      <SafeAreaView style={containerStyles}>
        <View style={bannerStyles}>
          {isAmbassador && (
            <LinearGradient
              colors={[colors.gold.medium, colors.gold.light]}
              end={{ x: 1, y: 0 }}
              start={{ x: 0, y: 0 }}
              style={styles.linearGradient}
            />
          )}
          <View style={circleSmallStyles} />
          <View style={circleMediumStyles} />
          <View style={circleLargeStyles} />

          <View style={styles.content}>{children}</View>
        </View>
      </SafeAreaView>
    );
  }
}
