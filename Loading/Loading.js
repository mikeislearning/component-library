import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View } from 'react-native';

import { colors } from 'app/theme';

import styles from './Loading.styles';

export default class Loading extends React.Component {
  static defaultProps = {
    color: colors.red.medium,
    centered: true,
    horizontal: true,
    size: 'large',
  };

  static propTypes = {
    color: PropTypes.string,
    centered: PropTypes.bool,
    horizontal: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large']),
  };

  render() {
    const { centered, color, horizontal, size } = this.props;

    const containerStyle = [];
    if (horizontal) {
      containerStyle.push(styles.horizontal);
    }
    if (centered) {
      containerStyle.push(styles.centered);
    }

    return (
      <View style={containerStyle}>
        <ActivityIndicator size={size} color={color} />
      </View>
    );
  }
}
