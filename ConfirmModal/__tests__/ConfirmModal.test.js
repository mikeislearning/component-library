import React from 'react';
import { render } from 'react-native-testing-library';

import ConfirmModal from '../ConfirmModal';

describe('<ConfirmModal />', () => {
  it('renders correctly', () => {
    const modal = render(
      <ConfirmModal
        cancelButton={{ onPress: () => {}, text: "Don't delete" }}
        confirmButton={{ onPress: () => {}, text: 'Yes, delete' }}
        isVisible={true}
        text="Are you sure?"
      />
    );
    expect(modal).toMatchSnapshot();
  });

  it('renders nothing if isVisible is false', () => {
    const modal = render(
      <ConfirmModal
        cancelButton={{ onPress: () => {}, text: "Don't delete" }}
        confirmButton={{ onPress: () => {}, text: 'Yes, delete' }}
        isVisible={false}
        text="Are you sure?"
      />
    );
    expect(modal).toMatchSnapshot();
  });
});
