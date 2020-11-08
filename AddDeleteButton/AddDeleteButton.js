import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';
import { images } from 'app/theme';

import styles from './AddDeleteButton.styles';

const TYPES = {
  add: 'add',
  delete: 'delete',
};

export default class AddDeleteButton extends React.Component {
  static propTypes = {
    accessibilityLabel: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    type: PropTypes.oneOf([TYPES.add, TYPES.delete]),
  };

  render() {
    const { accessibilityLabel, onPress, type } = this.props;
    const containerStyle = [styles.container];
    const iconStyle = [styles.icon];
    if (type === TYPES.delete) {
      containerStyle.push(styles.containerSmall);
      iconStyle.push(styles.iconSmall);
    }

    return (
      <TouchableOpacity
        accessibilityLabel={accessibilityLabel}
        activeOpacity={0.7}
        onPress={onPress}
        style={containerStyle}
      >
        <Image source={images[type]} style={iconStyle} />
      </TouchableOpacity>
    );
  }
}
