import React from 'react';
import { View, Text } from 'react-native';
import { PropTypes } from 'prop-types';

import styles from './SectionView.styles.js';

export default class SectionView extends React.Component {
  static propTypes = {
    sectionHeader: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  render() {
    const { sectionHeader, children } = this.props;

    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>{sectionHeader}</Text>
        {children}
      </View>
    );
  }
}
