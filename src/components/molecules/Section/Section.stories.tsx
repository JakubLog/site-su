import React from 'react';
import Section from './Section';

const object = {
  title: 'components/molecules/Section',
  component: Section
};

export default object;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = (args: any) => (
  <Section title="Section title" {...args}>
    This is section content...
  </Section>
);

export const primary = template.bind({});
