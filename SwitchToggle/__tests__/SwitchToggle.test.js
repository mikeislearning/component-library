import React from 'react';
import { render } from 'react-native-testing-library';

import SwitchToggle from '../SwitchToggle';

describe('<SwitchToggle />', () => {
  it('renders correctly', () => {
    const switchToggle = render(<SwitchToggle onValueChange={() => {}} value={true} />);
    expect(switchToggle).toMatchSnapshot();
  });

  it('renders with a label (when passed)', () => {
    const switchToggle = render(
      <SwitchToggle label={'Your profile is visible'} onValueChange={() => {}} value={true} />
    );
    expect(switchToggle).toMatchSnapshot();
  });
});
