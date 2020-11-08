import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';

import styles from './PillButton.styles.js';

export default class PillButton extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    iconPath: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isSelected: PropTypes.bool,
    isFixedWidth: PropTypes.bool,
    onPress: PropTypes.oneOfType([PropTypes.string, PropTypes.function]),
  };

  render() {
    const { name, iconPath, isSelected, isFixedWidth, onPress } = this.props;
    const pillButtonStyle = [styles.pillButtonContainer];
    const textStyle = [styles.text];
    if (isSelected) {
      pillButtonStyle.push(styles.selectedPillButton);
      textStyle.push(styles.selectedText);
    }

    const pillButtonContent = (
      <View style={pillButtonStyle} width={isFixedWidth ? 130 : 'auto'}>
        {iconPath && <Image style={styles.image} source={iconPath} />}
        <Text style={textStyle}>{name}</Text>
      </View>
    );

    return (
      <React.Fragment>
        {onPress ? (
          <TouchableOpacity onPress={onPress}>{pillButtonContent}</TouchableOpacity>
        ) : (
          pillButtonContent
        )}
      </React.Fragment>
    );
  }
}
