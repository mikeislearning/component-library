import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { PropTypes } from 'prop-types';
import DatePicker from 'react-native-modal-datetime-picker';

import { FormError } from 'app/components';

import { momentDate } from 'app/utils';

import styles from './DateTimePicker.styles';

const formatDate = (date) => {
  return momentDate(date, 'MMM DD, YYYY');
};

export default class DateTimePicker extends React.Component {
  static propTypes = {
    onConfirm: PropTypes.func,
    value: PropTypes.string,
    errorMsg: PropTypes.string,
    errors: PropTypes.bool,
  };

  state = {
    isDateTimePickerVisible: false,
    date: this.props.value ? formatDate(this.props.value) : '',
  };

  showDateTimePicker = () => {
    this.setState({
      isDateTimePickerVisible: true,
    });
  };

  hideDateTimePicker = () => {
    this.setState({
      isDateTimePickerVisible: false,
    });
  };

  handleDatePicked = (date) => {
    const formattedDate = formatDate(date);
    this.setState({
      date: formattedDate,
    });
    this.hideDateTimePicker();
    this.props.onConfirm(formattedDate);
  };

  render() {
    const { date, isDateTimePickerVisible } = this.state;
    const { errorMsg, errors } = this.props;
    const initDate = date ? new Date(date) : new Date();
    const dateTimeContainerStyles = [styles.dateTimeContainer];
    const dateTimeTextStyles = [styles.dateTimeText];
    if (!date) {
      dateTimeContainerStyles.push(styles.dateTimeContainerEmpty);
      dateTimeTextStyles.push(styles.dateTimeTextEmpty);
    }
    if (errors) dateTimeContainerStyles.push(styles.errorInput);

    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={this.showDateTimePicker}
          style={dateTimeContainerStyles}
        >
          <Text style={dateTimeTextStyles}>{date || 'Select a date'}</Text>
        </TouchableOpacity>
        <DatePicker
          date={initDate}
          isVisible={isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
        {errorMsg && <FormError text={errorMsg} />}
      </View>
    );
  }
}
