import React from 'react';
import FormItem from './FormItem';

const object = {
  title: 'components/molecules/FormItem',
  component: FormItem
};

export default object;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = (args: any) => <FormItem title="This is example test" src="https://google.com/" {...args} />;

export const primary = template.bind({});
