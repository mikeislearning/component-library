import React from 'react';
import { Modal, Text, View } from 'react-native';
import { PropTypes } from 'prop-types';
import { Button, Spacer } from 'app/components';

import styles from './ConfirmModal.styles';

export default class ConfirmModal extends React.Component {
  static propTypes = {
    cancelButton: PropTypes.shape({
      onPress: PropTypes.func.isRequired,
      text: PropTypes.string.isRequired,
    }),
    confirmButton: PropTypes.shape({
      onPress: PropTypes.func.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string,
    isVisible: PropTypes.bool,
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    isVisible: false,
  };

  render() {
    const { cancelButton, confirmButton, description, isVisible, text } = this.props;

    if (!isVisible) {
      return null;
    }

    return (
      <Modal visible={isVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            {description && <Text style={[styles.text, styles.description]}>{description}</Text>}
            <View style={styles.buttonsContainer}>
              <Button
                accessibilityLabel={confirmButton.text}
                fullWidth
                onPress={confirmButton.onPress}
                textStyle={styles.button}
              >
                {confirmButton.text}
              </Button>
              <Spacer size="xSmall" />
              {cancelButton && (
                <Button
                  accessibilityLabel={cancelButton.text}
                  fullWidth
                  onPress={cancelButton.onPress}
                  textStyle={styles.button}
                  theme="transparent"
                >
                  {cancelButton.text}
                </Button>
              )}
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
