import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { PropTypes } from 'prop-types';
import { images } from 'app/theme';

import styles from './Tips.styles';

export default class Tips extends React.Component {
  static defaultProps = {
    isDismissable: false,
    text: '',
  };

  static propTypes = {
    isDismissable: PropTypes.bool,
    onDismiss: PropTypes.func,
    text: PropTypes.string,
  };

  render() {
    const { isDismissable, onDismiss } = this.props;
    const containerStyles = [styles.container];
    if (isDismissable) containerStyles.push(styles.containerDismissable);

    return (
      <View style={containerStyles}>
        <View style={styles.iconContainer}>
          <Image source={images.bulbIcon} style={styles.bulbIcon} resizeMode={'contain'} />
        </View>
        <Text style={styles.text}>{this.props.text}</Text>
        {isDismissable && onDismiss && (
          <TouchableOpacity
            accessibilityLabel="Dismiss the tip"
            onPress={onDismiss}
            style={styles.closeIconContainer}
          >
            <Image source={images.close} style={styles.closeIcon} />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
