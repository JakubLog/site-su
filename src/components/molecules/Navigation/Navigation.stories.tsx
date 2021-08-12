import React from 'react';
import Navigation from './Navigation';

const object = {
  title: 'components/molecules/Navigation',
  component: Navigation
};

export default object;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = (args: any) => <Navigation {...args} />;

export const primary = template.bind({});
