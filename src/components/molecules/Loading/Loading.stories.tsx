import React from 'react';
import Loading from './Loading';

const object = {
  title: 'components/molecules/Loading',
  component: Loading
};

export default object;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = (args: any) => <Loading {...args} />;

export const primary = template.bind({});
