import React from 'react';
import ErrorPage from './ErrorPage';

const object = {
  title: 'views/ErrorPage',
  component: ErrorPage
};

export default object;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = (args: any) => <ErrorPage {...args} />;

export const primary = template.bind({});
