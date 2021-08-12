import React from 'react';
import Footer from './Footer';

const object = {
  title: 'components/molecules/Footer',
  component: Footer
};

export default object;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = (args: any) => <Footer {...args} />;

export const primary = template.bind({});
