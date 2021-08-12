import React from 'react';
import Share from './Share';

const object = {
  title: 'components/molecules/Share',
  component: Share
};

export default object;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = (args: any) => <Share {...args} />;

export const primary = template.bind({});
