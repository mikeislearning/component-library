import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View } from 'react-native';

import styles from './Spacer.styles';

export default class Spacer extends Component {
  static propTypes = {
    size: PropTypes.string,
  };

  static defaultProps = {
    size: 'medium',
  };

  render() {
    const { size } = this.props;

    return <View style={[styles.container, styles[size]]} />;
  }
}
