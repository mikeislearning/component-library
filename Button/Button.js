// @format
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';

import styles from './Button.styles';

export default class Button extends React.Component {
  static defaultProps = {
    disabled: false,
    fullWidth: false,
    theme: 'primary',
  };

  static propTypes = {
    accessibilityLabel: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    onPress: PropTypes.func,
    textStyle: PropTypes.object,
    theme: PropTypes.string,
  };

  render() {
    const {
      accessibilityLabel,
      children,
      disabled,
      fullWidth,
      onPress,
      textStyle,
      theme,
    } = this.props;
    const buttonStyles = [
      styles.button,
      styles[theme],
      disabled ? styles.disabled : null,
      fullWidth ? styles.fullWidth : null,
    ];
    const textStyles = [styles.text, styles[`${theme}Text`]];
    if (textStyle) textStyles.push(textStyle);
    if (disabled) textStyles.push(styles.disabledText);

    return (
      <TouchableOpacity
        accessibilityLabel={accessibilityLabel}
        disabled={disabled}
        onPress={onPress}
        style={buttonStyles}
      >
        {typeof children === 'string' ? <Text style={textStyles}>{children}</Text> : children}
      </TouchableOpacity>
    );
  }
}
