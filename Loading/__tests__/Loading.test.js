/**
 * @format
 */

import React from 'react';
import { render } from 'react-native-testing-library';

import Loading from '../Loading';

describe('<Loading />', () => {
  it('renders correctly', () => {
    const loading = render(<Loading />);
    const json = loading.toJSON();
    expect(loading).toMatchSnapshot();
    expect(json.type).toEqual('View');
    expect(json.children[0].type).toEqual('ActivityIndicator');
  });
});
