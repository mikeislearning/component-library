import React from 'react';
import CheckBox from 'react-native-check-box';
import { View } from 'react-native';
import { PropTypes } from 'prop-types';
import { colors } from 'app/theme';

import styles from './Checkbox.styles';

export default class Checkbox extends React.Component {
  static propTypes = {
    isChecked: PropTypes.bool,
    onClick: PropTypes.func,
    rightText: PropTypes.string,
    rightTextView: PropTypes.node,
  };

  render() {
    const { isChecked, onClick, rightText, rightTextView } = this.props;

    return (
      <View>
        <CheckBox
          style={styles.checkbox}
          onClick={onClick}
          isChecked={isChecked}
          rightText={rightText}
          rightTextView={rightTextView}
          checkedCheckBoxColor={colors.green.dark}
          uncheckedCheckBoxColor={colors.gray.medium}
        />
      </View>
    );
  }
}
