import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';
import { images } from 'app/theme';

import styles from './EditButton.styles';

export default class EditButton extends React.Component {
  static propTypes = {
    accessibilityLabel: PropTypes.string,
    icon: PropTypes.string,
    style: PropTypes.object,
    text: PropTypes.string,
    onPress: PropTypes.func.isRequired,
  };

  static defaultProps = {
    icon: 'edit',
    text: 'Edit',
  };

  render() {
    const { accessibilityLabel, icon, style, text, onPress } = this.props;
    const containerStyle = [styles.container];
    if (style) containerStyle.push(style);

    return (
      <TouchableOpacity
        accessibilityLabel={accessibilityLabel}
        activeOpacity={0.7}
        onPress={onPress}
        style={containerStyle}
      >
        <Image source={images[icon]} style={styles.editIcon} />
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
}
