import React from 'react';
import { ErrorParagraph } from './ErrorParagraph';

const object = {
  title: 'components/atoms/ErrorParagraph',
  component: ErrorParagraph
};

export default object;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = (args: any) => <ErrorParagraph {...args}>This is example text</ErrorParagraph>;

export const primary = template.bind({});
