import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';

import AddDeleteButton from '../AddDeleteButton';

describe('<AddDeleteButton />', () => {
  it('renders the add button correctly', () => {
    const button = render(<AddDeleteButton onPress={() => {}} type="add" />);
    expect(button).toMatchSnapshot();
  });

  it('renders the delete button correctly', () => {
    const button = render(<AddDeleteButton onPress={() => {}} type="delete" />);
    expect(button).toMatchSnapshot();
  });

  it('can be pressed successfully', () => {
    const mockedFn = jest.fn();
    const { getByTestId } = render(
      <AddDeleteButton onPress={mockedFn} testID="addButton" type="add" />
    );
    fireEvent.press(getByTestId('addButton'));
    expect(mockedFn).toHaveBeenCalledTimes(1);
  });
});
