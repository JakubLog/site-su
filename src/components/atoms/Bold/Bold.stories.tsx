import React from 'react';
import { Bold } from './Bold';

const object = {
  title: 'components/atoms/Bold',
  component: Bold
};

export default object;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = (args: any) => <Bold {...args}>This is example text with Bold</Bold>;

export const primary = template.bind({});
