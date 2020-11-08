import React from 'react';
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import { PropTypes } from 'prop-types';

import { Button, Input, InputLabel, Error, Loading, Spacer } from 'app/components';
import { images, metrics } from 'app/theme';
import { logEvent, sendSentryError } from 'app/services';
import { setFeedbackSubmitted } from 'app/utils';

import styles from './Feedback.styles';

const emojis = ['frustrated', 'confused', 'neutral', 'satisfied', 'amazed'];

export default class Feedback extends React.Component {
  static propTypes = {
    error: PropTypes.object,
    isDismissButtonsVisible: PropTypes.bool,
    isLoading: PropTypes.bool,
    isSubmitted: PropTypes.object,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isDismissButtonsVisible: false,
    isLoading: false,
  };

  state = {
    emoji: {
      amazed: false,
      confused: false,
      frustrated: false,
      neutral: false,
      satisfied: false,
    },
    message: '',
    submitted: false,
  };

  onChangeText = (value) => {
    this.setState({
      message: value,
    });
  };

  onPressEmoji = (name) => {
    const { emoji } = this.state;
    let emojis = {};
    Object.keys(emoji).map((key) => {
      emojis = {
        ...emojis,
        // set true if it is the selected emoji and it is not already selected
        [key]: key === name && !emoji[key],
      };
    });
    logEvent('dashboard_connections_feedback_rate', { rating: name });
    this.setState({
      emoji: emojis,
    });
  };

  onClose = () => {
    this.props.onClose();
  };

  onPressDecline = () => {
    // Mark feedback as submitted so we don't ask the user to submit the form again
    logEvent('dashboard_connections_feedback_dontask');
    this.setFeedbackInStorage();
    this.onClose();
  };

  onSubmit = async () => {
    try {
      const { emoji, message } = this.state;
      const selectedEmoji = Object.keys(emoji).find((key) => emoji[key] === true);

      await this.props.onSubmit({
        message,
        opinion: selectedEmoji,
        os: Platform.OS === 'ios' ? 'iOS' : 'Android',
      });

      logEvent('dashboard_connections_feedback_submit');

      this.setState({
        submitted: true,
      });

      this.setFeedbackInStorage();
    } catch (error) {
      sendSentryError('Error submitting feedback', error);
    }
  };

  setFeedbackInStorage = () => {
    logEvent('dashboard_connections_feedback_late');
    try {
      setFeedbackSubmitted('true');
    } catch (error) {
      sendSentryError('Error setting isFeedbackSubmitted in AsyncStorage from Feedback.js', error);
    }
  };

  render() {
    const { error, isDismissButtonsVisible, isLoading, isSubmitted } = this.props;
    const { emoji, message, submitted } = this.state;
    // Display smaller emojis on smaller screens
    const emojiStyles = metrics.screenWidth < 350 ? styles.emojiSmall : {};
    // The form is considered valid whether a message provided or emoji selected
    const isValidForm =
      message.length || Object.keys(emoji).filter((key) => emoji[key] === true).length;

    return (
      <View style={styles.container}>
        {submitted && isSubmitted.id ? (
          <View style={styles.submittedContainer}>
            <Image source={images.paperPlane} style={styles.sentIcon} />
            <Text style={[styles.text, styles.title]}>Thank you</Text>
            <Text style={[styles.text, styles.title]}>for your feedback!</Text>
            {isDismissButtonsVisible && (
              <TouchableOpacity
                accessibilityLabel={'Close feedback popup'}
                activeOpacity={0.7}
                onPress={this.onClose}
              >
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            )}
          </View>
        ) : (
          <React.Fragment>
            <Text style={[styles.text, styles.title]}>Thanks for using Arrive!</Text>
            <Text style={[styles.text, styles.subTitle]}>
              How was your Arrive experience today?
            </Text>
            <View style={styles.emojiList}>
              {emojis.map((item) => {
                return (
                  <TouchableOpacity
                    accessibilityLabel={item + ' emoji'}
                    activeOpacity={0.7}
                    key={item + 'emoji'}
                    onPress={() => this.onPressEmoji(item)}
                  >
                    <Image
                      source={images[item + (emoji[item] ? 'Active' : '')]}
                      style={[styles.emoji, emojiStyles]}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>

            <Spacer size="medium" />
            <InputLabel text="Write your feedback here" />
            <Input
              value={message}
              onChangeText={this.onChangeText}
              placeholder="Your message (optional)"
              multiline={true}
              textAlignVertical="top"
            />

            <Spacer size="xsmall" />
            <Text style={[styles.text, styles.description]}>
              Your feedback will only be shared with our team and will help us make improvement.
              Thank you!
            </Text>
            <Spacer size="medium" />
            <View style={styles.buttons}>
              {!isLoading ? (
                <Button disabled={!isValidForm} onPress={this.onSubmit}>
                  Submit feedback
                </Button>
              ) : (
                <Loading />
              )}

              {isDismissButtonsVisible && (
                <View style={styles.dismissButtons}>
                  <TouchableOpacity
                    accessibilityLabel="Leave feedback later"
                    activeOpacity={0.7}
                    onPress={this.onClose}
                    style={styles.dismissButton}
                  >
                    <Text style={[styles.text, styles.dismissButtonText]}>Maybe later</Text>
                  </TouchableOpacity>

                  <View style={styles.dismissButtonSeparator} />

                  <TouchableOpacity
                    accessibilityLabel="Don't ask me again about leaving feedback"
                    activeOpacity={0.7}
                    onPress={this.onPressDecline}
                    style={styles.dismissButton}
                  >
                    <Text
                      style={[styles.text, styles.dismissButtonText]}
                    >{`Don't ask me again`}</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            {error && (
              <React.Fragment>
                <Spacer size="small" />
                <Error error={error} />
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </View>
    );
  }
}
