import React from 'react';
import Hero from './Hero';

const object = {
  title: 'components/molecules/Hero',
  component: Hero
};

export default object;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = (args: any) => <Hero {...args} />;

export const primary = template.bind({});
