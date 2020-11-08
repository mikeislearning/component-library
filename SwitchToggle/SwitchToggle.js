import React from 'react';
import { Platform, Switch, Text, View } from 'react-native';
import { PropTypes } from 'prop-types';

import { colors } from 'app/theme';

import styles from './SwitchToggle.styles';

export default class SwitchToggle extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    onValueChange: PropTypes.func.isRequired,
    value: PropTypes.bool.isRequired,
  };

  render() {
    const { label, onValueChange, value } = this.props;
    const labelStyles = [styles.label];
    if (value) labelStyles.push(styles.labelActive);

    return (
      <View style={styles.container}>
        <Switch
          onValueChange={onValueChange}
          thumbColor={Platform.OS === 'android' ? colors.white : null}
          trackColor={{ true: colors.green.dark }}
          value={value}
        />
        {label && <Text style={labelStyles}>{label}</Text>}
      </View>
    );
  }
}
