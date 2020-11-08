import React from 'react';
import { Image, Text, View } from 'react-native';
import { PropTypes } from 'prop-types';
import { images } from 'app/theme';

import styles from './FormError.styles';

export default class FormError extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    const { text } = this.props;
    if (!text) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Image source={images.error} style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}
