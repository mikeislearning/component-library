/**
 * @format
 */

import React from 'react';
import { render } from 'react-native-testing-library';

import Popup from '../Popup';

describe('<Popup />', () => {
  it('renders correctly', () => {
    const popup = render(<Popup modalVisible={true} text="Content" />);
    expect(popup).toMatchSnapshot();
  });
});
