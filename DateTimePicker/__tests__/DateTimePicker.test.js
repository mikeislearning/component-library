import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import DateTimePicker from '../DateTimePicker';

describe('<Dropdown />', () => {
  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<DateTimePicker value="2019-09-03" />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
