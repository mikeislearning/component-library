/**
 * @format
 */

// import 'react-native';
import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';

import Button from '../Button';

describe('<Button />', () => {
  it('renders correctly', () => {
    const button = render(<Button />);
    expect(button).toMatchSnapshot();
  });

  it('can be pressed successfully', () => {
    const mockedFn = jest.fn();
    const { getByText } = render(<Button onPress={mockedFn}>Testing</Button>);

    fireEvent.press(getByText('Testing'));

    expect(mockedFn).toHaveBeenCalledTimes(1);
  });
});
