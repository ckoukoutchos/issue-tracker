import React from 'react';
import Card from './Card';
import renderer from 'react-test-renderer';

it('renders the Card component correctly', () => {
  const tree = renderer
    .create(<Card selected={true}>Text Here</Card>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});