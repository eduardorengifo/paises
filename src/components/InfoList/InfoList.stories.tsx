import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import InfoList, { InfoListProps } from './InfoList';

export default {
  title: 'InfoList',
  components: InfoList,
  excludeStories: ['infoListArgs']
} as Meta;

export const infoListArgs = {
  items: [
    { name: 'Population', value: '24.500706496028684' },
    { name: 'Region', value: 'South America' },
    { name: 'Capital', value: 'Lima' }
  ]
};

const Template: Story<InfoListProps> = args => <InfoList {...args} />;

export const Default = Template.bind({});
Default.args = infoListArgs;
