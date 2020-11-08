import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';

import EditButton from '../EditButton';

describe('<EditButton />', () => {
  it('renders correctly', () => {
    const button = render(<EditButton onPress={() => {}} />);
    expect(button).toMatchSnapshot();
  });

  it('can be pressed successfully', () => {
    const mockedFn = jest.fn();
    const { getByText } = render(<EditButton onPress={mockedFn} />);
    fireEvent.press(getByText('Edit'));
    expect(mockedFn).toHaveBeenCalledTimes(1);
  });
});
