import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import SearchForm, { SearchFormProps } from './SearchForm';

export default {
  title: 'SearchForm',
  component: SearchForm
} as Meta;

const Template: Story<SearchFormProps> = args => <SearchForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  languages: [
    { value: 'es', text: 'Spanish' },
    { value: 'en', text: 'English' }
  ],
  currencies: [{ value: 'PEN', text: 'Nuevo sol' }],
  regions: [{ value: 'Americas', text: 'Americas' }]
};
