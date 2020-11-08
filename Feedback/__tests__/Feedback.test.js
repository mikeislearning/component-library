import React from 'react';
import { render } from 'react-native-testing-library';

import Feedback from '../Feedback';

describe('<Feedback />', () => {
  it('renders correctly', () => {
    const feedback = render(<Feedback />);
    expect(feedback).toMatchSnapshot();
  });

  it('renders dismiss buttons', () => {
    const feedback = render(<Feedback isDismissButtonsVisible={true} onClose={() => {}} />);
    expect(feedback).toMatchSnapshot();
  });
});
