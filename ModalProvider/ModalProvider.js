// @format
import React from 'react';
import { Modal, View, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { PropTypes } from 'prop-types';

import { Carousel, Feedback } from 'app/components';
import { strings } from 'app/utils';
import { requestPermission, sendSentryError } from 'app/services';
import { NOTIFICATION_REJECTION_TOKEN } from 'app/services/firebase/notifications';

import { getOnBoardingData } from './ModalData';
import styles from './ModalProvider.styles';

export const ModalContext = React.createContext();

export default class ModalProvider extends React.Component {
  static propTypes = {
    acceptButtonText: PropTypes.string,
    children: PropTypes.node,
    error: PropTypes.object,
    isLoading: PropTypes.bool,
    isSubmitted: PropTypes.object,
    onTermsAcceptanceChange: PropTypes.func,
    postFeedback: PropTypes.func,
    termsAccepted: PropTypes.bool,
    text: PropTypes.string,
  };

  state = {
    content: '',
    data: [],
    isModalVisible: false,
    notificationPressed: false,
    notificationPressedText: '',
  };

  toggleVisibility = (isVisible) => {
    this.setState({ isModalVisible: isVisible });
  };

  requestPermission = async () => {
    let token;
    try {
      token = await requestPermission();
    } catch (err) {
      return sendSentryError('Error requesting permission in modal', err);
    }

    const notificationPressed = true;
    const notificationPressedText =
      token === NOTIFICATION_REJECTION_TOKEN
        ? 'You can enable notifications later from your Settings screen'
        : 'Notifications enabled!';

    // if this was successful, show notification success button
    this.setState({
      data: getOnBoardingData(this, notificationPressed, notificationPressedText),
      notificationPressed,
      notificationPressedText,
    });
  };

  openModal = (type) => {
    const { notificationPressed, notificationPressedText } = this.state;

    switch (type) {
      case strings.modalType.onboarding:
        this.setState({
          data: getOnBoardingData(this, notificationPressed, notificationPressedText),
        });
        break;
      case strings.modalType.feedback:
        this.setState({
          content: strings.modalType.feedback,
        });
        break;
    }
    this.toggleVisibility(true);
  };

  closeModal = () => this.toggleVisibility(false);

  renderContent = () => {
    if (this.state.content === strings.modalType.feedback) {
      const { error, isLoading, isSubmitted, postFeedback } = this.props;

      return (
        <Feedback
          error={error}
          isDismissButtonsVisible={true}
          isLoading={isLoading}
          isSubmitted={isSubmitted}
          onClose={this.closeModal}
          onSubmit={postFeedback}
        />
      );
    }
  };

  render() {
    const { children } = this.props;
    const {
      data,
      content,
      isModalVisible,
      notificationPressed,
      notificationPressedText,
    } = this.state;

    return (
      <ModalContext.Provider
        value={{
          notificationPressed,
          notificationPressedText,
          openModal: this.openModal,
          closeModal: this.closeModal,
          isModalVisible,
        }}
      >
        {children}
        {(!!data.length || !!content) && (
          <Modal
            style={styles.modal}
            animationType="slide"
            transparent
            visible={this.state.isModalVisible}
          >
            {data.length ? (
              <ScrollView style={styles.scrollView}>
                <View style={styles.contentContainer}>
                  <Carousel entries={data} fullWidth={false} />
                </View>
              </ScrollView>
            ) : (
              <TouchableOpacity
                style={styles.container}
                activeOpacity={1}
                onPressOut={this.closeModal}
              >
                <ScrollView style={styles.scrollView}>
                  <TouchableWithoutFeedback>
                    <View style={styles.contentContainer}>
                      <View>{this.renderContent()}</View>
                    </View>
                  </TouchableWithoutFeedback>
                </ScrollView>
              </TouchableOpacity>
            )}
          </Modal>
        )}
      </ModalContext.Provider>
    );
  }
}
