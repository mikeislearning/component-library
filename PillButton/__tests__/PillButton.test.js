/**
 * @format
 */

import React from 'react';
import { render } from 'react-native-testing-library';

import PillButton from '../PillButton';

describe('<PillButton />', () => {
  it('renders correctly', () => {
    const pillButton = render(<PillButton name={'name'} iconPath={5} />);
    expect(pillButton).toMatchSnapshot();
  });
});
