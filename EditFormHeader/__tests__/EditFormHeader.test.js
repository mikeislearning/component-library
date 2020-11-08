import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';

import EditFormHeader from '../EditFormHeader';

describe('<EditFormHeader />', () => {
  it('renders correctly', () => {
    const header = render(
      <EditFormHeader onClose={() => {}} onSave={() => {}} title="Title Text" />
    );
    expect(header).toMatchSnapshot();
  });

  it('renders without a title if it is not passed', () => {
    const header = render(<EditFormHeader onClose={() => {}} onSave={() => {}} />);
    expect(header).toMatchSnapshot();
  });

  it('can handle pressing the Save button successfully', () => {
    const mockedFn = jest.fn();
    const { getByText } = render(
      <EditFormHeader onClose={() => {}} onSave={mockedFn} title="Title Text" isValidForm={true} />
    );

    fireEvent.press(getByText('Save'));

    expect(mockedFn).toHaveBeenCalledTimes(1);
  });

  it('can handle pressing the Close button successfully', () => {
    const mockedFn = jest.fn();
    const { getByType } = render(
      <EditFormHeader onClose={mockedFn} onSave={() => {}} title="Title Text" />
    );

    fireEvent.press(getByType('Image'));

    expect(mockedFn).toHaveBeenCalledTimes(1);
  });
});
