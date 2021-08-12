import React from 'react';
import { PageTitle } from './PageTitle';

const object = {
  title: 'components/atoms/PageTitle',
  component: PageTitle
};

export default object;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = (args: any) => (
  <PageTitle style={{ visibility: 'visible' }} {...args}>
    This is example text
  </PageTitle>
);

export const primary = template.bind({});
