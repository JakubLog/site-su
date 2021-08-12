import React from 'react';
import { Input } from './Input';

const object = {
  title: 'components/atoms/Input',
  component: Input
};

export default object;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = (args: any) => <Input placeholder="example@email.com" label="Email" id="email" name="email" type="email" {...args} />;

export const primary = template.bind({});
