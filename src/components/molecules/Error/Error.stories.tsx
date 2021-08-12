import React from 'react';
import Error from './Error';

const object = {
  title: 'components/molecules/Error',
  component: Error
};

export default object;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = (args: any) => <Error message="This is example error message" {...args} />;

export const primary = template.bind({});
