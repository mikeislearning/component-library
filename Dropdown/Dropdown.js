import React from 'react';
import { Image, View } from 'react-native';
import { PropTypes } from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';
import { images } from 'app/theme';
import { FormError } from 'app/components';

import styles from './Dropdown.styles';

export default class Dropdown extends React.Component {
  static propTypes = {
    errorMsg: PropTypes.string,
    errors: PropTypes.bool,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onValueChange: PropTypes.func,
    onUpArrow: PropTypes.func,
    onDownArrow: PropTypes.func,
    dropdownRef: PropTypes.func,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
      })
    ),
  };

  render() {
    const {
      errorMsg,
      errors,
      value,
      placeholder,
      items,
      onValueChange,
      onUpArrow,
      onDownArrow,
      dropdownRef,
    } = this.props;

    const formatedPlaceholder = {
      label: placeholder,
      value: null,
    };

    if (!items.length) {
      return null;
    }

    let inputStyles = styles.input;
    if (!value) {
      inputStyles = { ...inputStyles, ...styles.inputEmpty };
    }
    if (errors) {
      inputStyles = { ...inputStyles, ...styles.errorInput };
    }

    return (
      <View style={styles.inputContainer}>
        <RNPickerSelect
          Icon={() => {
            return <Image source={images.arrowDropdown} style={styles.arrowDropdown} />;
          }}
          items={items}
          onValueChange={onValueChange}
          onUpArrow={onUpArrow}
          onDownArrow={onDownArrow}
          placeholder={formatedPlaceholder}
          style={{
            inputIOS: inputStyles,
            inputAndroid: inputStyles,
            chevronActive: styles.chevronActive,
            placeholder: styles.placeholder,
          }}
          useNativeAndroidPickerStyle={false}
          value={value}
          ref={dropdownRef}
        />
        {errorMsg && <FormError text={errorMsg} />}
      </View>
    );
  }
}
