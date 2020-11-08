import React from 'react';
import { render } from 'react-native-testing-library';

import EditAvatar from '../EditAvatar';

describe('<EditAvatar />', () => {
  const currentUser = {
    avatar: {
      uploaded: 'emptyProfile',
    },
  };

  it('renders correctly', () => {
    const editAvatar = render(
      <EditAvatar
        avatar="emptyProfile"
        createImage={() => {}}
        currentUser={currentUser}
        setAvatar={() => {}}
        updateProfilePicture={() => {}}
      />
    );
    expect(editAvatar).toMatchSnapshot();
  });
});
