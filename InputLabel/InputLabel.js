import React from 'react';
import { Text } from 'react-native';
import { PropTypes } from 'prop-types';

import styles from './InputLabel.styles';

export default class InputLabel extends React.Component {
  static propTypes = {
    hasTopMargin: PropTypes.bool,
    text: PropTypes.string,
  };

  static defaultProps = {
    hasTopMargin: false,
  };

  render() {
    const { hasTopMargin, text } = this.props;

    if (!text) {
      return null;
    }

    const style = [styles.label];
    if (hasTopMargin) style.push(styles.hasTopMargin);

    return <Text style={style}>{text}</Text>;
  }
}
