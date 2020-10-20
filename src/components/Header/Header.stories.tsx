import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Header, { HeaderProps } from './Header';

export default {
  title: 'Header',
  component: Header,
  excludeStories: ['headerArgs']
} as Meta;

export const headerArgs = {
  title: 'Países'
};

const Template: Story<HeaderProps> = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = headerArgs;
