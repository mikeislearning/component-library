import React from 'react';
import { Modal, SafeAreaView, ScrollView } from 'react-native';
import { PropTypes } from 'prop-types';
import HTML from 'react-native-render-html';

import { Button, EditFormHeader } from 'app/components';

import styles from './Popup.styles';

export default class Popup extends React.Component {
  static propTypes = {
    acceptButtonText: PropTypes.string,
    modalVisible: PropTypes.bool,
    onClose: PropTypes.func,
    openText: PropTypes.string,
    termsAccepted: PropTypes.bool,
    text: PropTypes.string,
  };

  static defaultProps = {
    modalVisible: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: props.modalVisible,
    };
  }

  onClose = () => {
    this.setModalVisible(false);
    this.props.onClose();
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { openText, text } = this.props;
    if (!text) return null;

    return (
      <React.Fragment>
        <Modal animationType="slide" transparent={false} visible={this.state.modalVisible}>
          <SafeAreaView style={styles.safeAreaView}>
            <EditFormHeader onClose={this.onClose} />
            <ScrollView style={styles.container}>
              <HTML html={text} />
            </ScrollView>
          </SafeAreaView>
        </Modal>

        {openText && (
          <Button theme="quaternary" onPress={() => this.setModalVisible(true)}>
            {openText}
          </Button>
        )}
      </React.Fragment>
    );
  }
}
