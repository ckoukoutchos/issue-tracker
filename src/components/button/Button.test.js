import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';

it('renders the Button component correctly', () => {
  const tree = renderer
    .create(<Button type="submit">Submit</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});