import React from 'react';
import { render } from 'react-native-testing-library';

import FormError from '../FormError';

describe('<FormError />', () => {
  it('renders correctly', () => {
    const error = render(<FormError text={'Error message'} />);
    expect(error).toMatchSnapshot();
  });

  it('renders nothing if text is not passed', () => {
    const error = render(<FormError />);
    expect(error).toMatchSnapshot();
  });
});
