import React from 'react';
import Avatar from './Avatar';
import renderer from 'react-test-renderer';

it('renders the Avatar component correctly', () => {
  const tree = renderer
    .create(<Avatar url="http://madupsite.com" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});