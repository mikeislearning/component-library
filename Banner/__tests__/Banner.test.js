import React from 'react';
import { Text } from 'react-native';
import { render } from 'react-native-testing-library';

import Banner from '../Banner';

describe('<Banner />', () => {
  it('renders correctly', () => {
    const banner = render(
      <Banner isOtherUserProfile={true}>
        <Text>Banner title</Text>
      </Banner>
    );
    expect(banner).toMatchSnapshot();
  });

  it('renders a gold banner for ambassadors', () => {
    const banner = render(
      <Banner role="ambassador">
        <Text>Ambassador Content</Text>
      </Banner>
    );
    expect(banner).toMatchSnapshot();
  });

  it('renders a red banner for own profile pages of regular users', () => {
    const banner = render(
      <Banner isOtherUserProfile={false} role="user">
        <Text>Ambassador Content</Text>
      </Banner>
    );
    expect(banner).toMatchSnapshot();
  });
});
