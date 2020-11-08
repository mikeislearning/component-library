/* eslint-disable no-console */
/**
 * @format
 */

import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';

import Checkbox from '../Checkbox';

describe('<Checkbox />', () => {
  const onEventMock = jest.fn();
  it('renders correctly', () => {
    const checkBox = render(<Checkbox testID="checkBox" isChecked={true} onClick={onEventMock} />);
    const { getByTestId } = checkBox;
    expect(getByTestId('checkBox').props.isChecked).toBe(true);
    fireEvent(getByTestId('checkBox'), 'click');
    expect(onEventMock).toHaveBeenCalled();
    expect(checkBox).toMatchSnapshot();
  });
});
