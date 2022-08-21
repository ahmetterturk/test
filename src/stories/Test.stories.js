import React from 'react';

import Test from '../components/Test';

export default {
  title: 'Component/Test',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};