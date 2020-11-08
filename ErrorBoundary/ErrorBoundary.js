// @format
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppState, AsyncStorage, Text, View } from 'react-native';

import { Button } from 'app/components';
import { resetState } from 'app/actions';
import store from 'app/stores';
import { logEvent, sendSentryError } from 'app/services';

import styles from './ErrorBoundary.styles';

const TOKEN_DATE = 'tokendate';

// number of milliseconds in 30 minutes
const MILLISECONDS_LIMIT = 1800000;

export default class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  state = { errorInfo: null };

  componentDidCatch(error, errorInfo) {
    this.setState({
      errorInfo: errorInfo,
    });
    sendSentryError(error, errorInfo);
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
    this.lastOpenedValidator();
  }

  componentWillUnmount() {
    AppState.addEventListener('change', this.handleAppStateChange);
    this.clearTimer();
  }

  timer = null;

  handleAppStateChange = async (nextAppState) => {
    if (nextAppState !== 'active') {
      // app was closed
      this.clearTimer();
    } else {
      // app was opened
      this.lastOpenedValidator();
    }
  };

  clearTimer = () => {
    clearTimeout(this.timer);
  };

  startTimer = async (limit = MILLISECONDS_LIMIT) => {
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.lastOpenedValidator();
    }, limit);
  };

  lastOpenedValidator = async () => {
    const now = Date.now();
    const appLastOpened = await AsyncStorage.getItem(TOKEN_DATE);

    if (!appLastOpened) {
      AsyncStorage.setItem(TOKEN_DATE, now.toString());
      this.startTimer();
    } else {
      const difference = now - parseInt(appLastOpened, 10);
      if (difference > MILLISECONDS_LIMIT) {
        // 30 minutes has been hit!
        logEvent('refresh_limit_passed');
        this.reloadApp();
      } else {
        this.startTimer(difference);
      }
    }
  };

  reloadApp = async () => {
    const now = Date.now();
    AsyncStorage.setItem(TOKEN_DATE, now.toString());
    this.startTimer();
    store.dispatch(resetState());
  };

  render() {
    if (this.state.errorInfo) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Looks like there was an error. Please reload the app.</Text>
          <Button onPress={this.reloadApp}>Reload App</Button>
        </View>
      );
    }
    return this.props.children;
  }
}
