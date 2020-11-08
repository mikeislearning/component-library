/**
 * @format
 */

import React from 'react';
import { render } from 'react-native-testing-library';

import ModalProvider from '../ModalProvider';

describe('<ModalProvider />', () => {
  it('renders correctly', () => {
    const popup = render(<ModalProvider />);
    expect(popup).toMatchSnapshot();
  });
});
