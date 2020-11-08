/**
 * @format
 */

import React from 'react';
import { render } from 'react-native-testing-library';

import SectionView from '../SectionView';

describe('<SectionView />', () => {
  it('renders correctly', () => {
    const sectionView = render(<SectionView sectionHeader={'sectionHeader'} />);
    expect(sectionView).toMatchSnapshot();
    const json = sectionView.toJSON();
    const { children } = json;
    const [first] = children;
    expect(first.type).toEqual('Text');
    expect(first.children[0]).toEqual('sectionHeader');
  });
});
