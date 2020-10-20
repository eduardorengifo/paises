import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Footer, { FooterProps } from './Footer';

export default {
  title: 'Footer',
  component: Footer,
  excludeStories: ['footerArgs']
} as Meta;

export const footerArgs = {
  name: 'Países'
};

const Template: Story<FooterProps> = args => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = footerArgs;
