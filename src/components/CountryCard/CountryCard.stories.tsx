import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box } from 'rebass/styled-components';

import CountryCard, { CountryCardProps } from './CountryCard';
import { infoListArgs } from 'components/InfoList/InfoList.stories';

export default {
  title: 'CountryCard',
  component: CountryCard,
  decorators: [
    Story => (
      <Box width={256}>
        <Story />
      </Box>
    )
  ],
  excludeStories: ['countryCardArgs']
} as Meta;

export const countryCardArgs = {
  flag: 'https://restcountries.eu/data/per.svg',
  title: 'Perú',
  InfoListProps: infoListArgs
};

const Template: Story<CountryCardProps> = args => <CountryCard {...args} />;

export const Default = Template.bind({});
Default.args = countryCardArgs;
