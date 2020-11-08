import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { PropTypes } from 'prop-types';
import { Loading } from 'app/components';
import { images } from 'app/theme';

import styles from './EditFormHeader.styles';

export default class EditFormHeader extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    isValidForm: PropTypes.bool,
    onClose: PropTypes.func,
    onSave: PropTypes.func,
    title: PropTypes.string,
  };

  static defaultProps = {
    isLoading: false,
  };

  renderRightAction() {
    const { isLoading, isValidForm, onSave } = this.props;
    const rightActionTextStyles = !isValidForm ? styles.rightActionDisabled : {};
    const rightAction = <Text style={[styles.rightActionText, rightActionTextStyles]}>Save</Text>;

    if (isLoading) {
      return (
        <View style={[styles.rightActionContainer, styles.loadingContainer]}>
          <Loading size="small" />
        </View>
      );
    } else {
      if (isValidForm) {
        return (
          <TouchableOpacity onPress={onSave} style={styles.rightActionContainer}>
            {rightAction}
          </TouchableOpacity>
        );
      } else if (onSave) {
        return <View style={styles.rightActionContainer}>{rightAction}</View>;
      }
    }

    return null;
  }

  render() {
    const { onClose, title } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          accessibilityLabel="Close"
          onPress={onClose}
          style={styles.leftActionContainer}
        >
          <Image source={images.close} style={styles.closeIcon} />
        </TouchableOpacity>
        {title && <Text style={styles.title}>{title}</Text>}
        {this.renderRightAction()}
      </View>
    );
  }
}
