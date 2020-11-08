import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Dropdown from '../Dropdown';

const itemList = [
  {
    label: 'Label1',
    value: 'Value1',
  },
  {
    label: 'Label2',
    value: 'Value2',
  },
  {
    label: 'Label3',
    value: 'Value3',
  },
];

describe('<Dropdown />', () => {
  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Dropdown placeholder="Placeholder text" items={itemList} onValueChange={() => {}} />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
