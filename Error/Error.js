// @format
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import { Button } from 'app/components';
import { resetState } from 'app/actions';
import store from 'app/stores';
import { sendSentryError } from 'app/services';

import styles from './Error.styles';

export default class Error extends Component {
  static propTypes = {
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

  static defaultProps = {
    error: 'An error occurred',
  };

  componentDidMount() {
    const { error } = this.props;
    sendSentryError('Looks like an error occurred', error);
  }

  reloadApp = () => {
    store.dispatch(resetState());
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Looks like there was an error. Please reload the app.</Text>
        <Button onPress={this.reloadApp}>Reload App</Button>
      </View>
    );
  }
}
