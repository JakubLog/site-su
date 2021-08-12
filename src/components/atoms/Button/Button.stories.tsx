import React from 'react';
import { Button } from './Button';

const object = {
  title: 'components/atoms/Button',
  component: Button
};

export default object;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = (args: any) => <Button {...args}>This is example text</Button>;

export const primary = template.bind({});
