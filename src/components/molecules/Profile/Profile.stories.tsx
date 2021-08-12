import React from 'react';
import Profile from './Profile';

const object = {
  title: 'components/molecules/Profile',
  component: Profile
};

export default object;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = (args: any) => <Profile style={{ width: '400px' }} name="Storybook name" {...args} />;

export const primary = template.bind({});
