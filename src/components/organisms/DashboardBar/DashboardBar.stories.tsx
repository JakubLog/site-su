import React from 'react';
import DashboardBar from './DashboardBar';

const object = {
  title: 'components/organisms/DashboardBar',
  component: DashboardBar
};

export default object;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = (args: any) => <DashboardBar name="Storybook name" {...args} />;

export const primary = template.bind({});
