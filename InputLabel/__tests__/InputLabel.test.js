import React from 'react';
import { render } from 'react-native-testing-library';

import InputLabel from '../InputLabel';

describe('<InputLabel />', () => {
  it('renders correctly', () => {
    const label = render(<InputLabel text={'Input label'} />);
    expect(label).toMatchSnapshot();
  });

  it('renders with an extra top margin when needed', () => {
    const label = render(<InputLabel text={'Input label'} hasTopMargin={true} />);
    expect(label).toMatchSnapshot();
  });
});
