import React from 'react';
import DragContainer from './DragContainer';
import renderer from 'react-test-renderer';

it('renders the DragContainer component correctly', () => {
  const tree = renderer
    .create(<DragContainer items={[]} updateOrder={() => { }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});