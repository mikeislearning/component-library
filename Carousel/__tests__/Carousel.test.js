import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Carousel from '../Carousel';

describe('<Carousel />', () => {
  it('renders correctly', () => {
    const entries = [
      {
        title: 'title1',
        image: 32,
        subtitle: 'subtitle1',
      },
      {
        title: 'title2',
        image: 33,
        subtitle: 'subtitle2',
      },
    ];
    const renderer = new ShallowRenderer();
    renderer.render(<Carousel entries={entries} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
