/**
 * @format
 */

import React from 'react';
import { render } from 'react-native-testing-library';

import Error from '../Error';

describe('<Error />', () => {
  it('renders correctly', () => {
    const error = render(<Error error={'error'} />);
    const json = error.toJSON();
    expect(error).toMatchSnapshot();
    expect(json.type).toEqual('View');
    expect(json.children[0].type).toEqual('Text');
    expect(json.children[0].children[0]).toEqual('Looks like an error occurred :(');
  });
});
