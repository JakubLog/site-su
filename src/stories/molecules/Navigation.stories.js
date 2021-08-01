import React from 'react';
import Navigation from 'components/molecules/Navigation/Navigation';

const object = {
  title: 'components/molecules/Navigation',
  component: Navigation
};

export default object;

const template = (args) => <Navigation {...args} />;

export const primary = template.bind({});
primary.args = {};
