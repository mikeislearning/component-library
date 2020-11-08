import React from 'react';
import { Text, View } from 'react-native';
import { PropTypes } from 'prop-types';

import styles from './ProgressBar.styles';

export default class ProgressBar extends React.Component {
  static defaultProps = {
    currentStep: 0,
  };

  static propTypes = {
    currentStep: PropTypes.number,
  };

  render() {
    return (
      <View style={styles(this.props.currentStep).container}>
        <View style={styles(this.props.currentStep).progressBar}>
          <View style={styles(this.props.currentStep).currentProgressBar} />
        </View>
        <Text style={styles(this.props.currentStep).progressBarText}>
          {this.props.currentStep}/7
        </Text>
      </View>
    );
  }
}
