import React from 'react';
import MainTemplate from 'components/templates/MainTemplate';

const object = {
  title: 'components/templates/MainTemplate',
  component: MainTemplate
};

export default object;

const template = (args) => <MainTemplate {...args} />;

export const primary = template.bind({});
primary.args = {};
