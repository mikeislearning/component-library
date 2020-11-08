/**
 * @format
 */

// import 'react-native';
import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';

import Input from '../Input';

describe('<Input />', () => {
  it('renders correctly', () => {
    const input = render(<Input />);
    expect(input).toMatchSnapshot();
  });

  it('can enter input successfully', () => {
    const onEventMock = jest.fn();
    const { getByTestId } = render(<Input testID="change" onChangeText={onEventMock} />);

    // fireEvent(getByTestId('change'), 'onChangeText', 'testing123');
    fireEvent.changeText(getByTestId('change'), 'testing123');
    expect(onEventMock).toHaveBeenCalledWith('testing123');
  });
});
