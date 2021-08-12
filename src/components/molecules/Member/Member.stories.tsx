import React from 'react';
import Member from './Member';

const object = {
  title: 'components/molecules/Member',
  component: Member
};

export default object;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = (args: any) => <Member permissions="permissions" name="Storybook Name" classNameProp="8D" {...args} />;

export const primary = template.bind({});
