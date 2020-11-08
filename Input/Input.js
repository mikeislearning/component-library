import React from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { PropTypes } from 'prop-types';

import { images } from 'app/theme';
import { FormError } from 'app/components';

import colors from '../../theme/colors';

import styles from './Input.styles';

export default class Input extends React.Component {
  static propTypes = {
    clearMode: PropTypes.string,
    customStyle: PropTypes.object,
    errorMsg: PropTypes.string,
    errors: PropTypes.bool,
    hasBorder: PropTypes.bool,
    hasBottomMargin: PropTypes.bool,
    onChangeText: PropTypes.func,
    onPressReveal: PropTypes.func,
    multiline: PropTypes.bool,
    placeholder: PropTypes.string,
    textContentType: PropTypes.string,
    value: PropTypes.string,
  };

  static defaultProps = {
    clearMode: 'always',
    customStyle: {},
    hasBorder: true,
    hasBottomMargin: true,
  };

  render() {
    const {
      clearMode,
      customStyle,
      errorMsg,
      errors,
      hasBorder,
      hasBottomMargin,
      multiline,
      onChangeText,
      onPressReveal,
      placeholder,
      textContentType,
      value,
      ...otherProps
    } = this.props;

    const inputStyle = [styles.input, customStyle];
    const containerStyle = [];

    if (hasBorder && !multiline) inputStyle.push(styles.hasBorder);
    if (multiline) inputStyle.push(styles.multiline);
    if (!value) inputStyle.push(styles.inputEmpty);
    if (errors) inputStyle.push(styles.errorInput);

    if (hasBottomMargin) containerStyle.push(styles.hasBottomMargin);
    if (multiline) {
      containerStyle.push(styles.multilineContainer);
      if (hasBorder) containerStyle.push(styles.hasBorder);
      if (!value) containerStyle.push(styles.inputEmpty);
    }

    return (
      <View style={containerStyle}>
        <View style={styles.inputContainer}>
          <TextInput
            clearButtonMode={clearMode}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            style={inputStyle}
            multiline={multiline}
            placeholderTextColor={colors.gray.medium}
            {...otherProps}
          />
          {textContentType === 'password' && (
            <TouchableOpacity
              accessibilityLabel="Reveal password"
              activeOpacity={0.8}
              onPress={onPressReveal}
              style={styles.iconContainer}
            >
              <Image source={images.eye} style={styles.icon} />
            </TouchableOpacity>
          )}
        </View>
        {errorMsg && <FormError text={errorMsg} />}
      </View>
    );
  }
}
