/**
 * @format
 */

import React from 'react';
import { render } from 'react-native-testing-library';

import ProgressBar from '../ProgressBar';

describe('<ProgressBar />', () => {
  it('renders correctly', () => {
    const progressBar = render(<ProgressBar currentStep={1} />);
    expect(progressBar).toMatchSnapshot();
  });
});
