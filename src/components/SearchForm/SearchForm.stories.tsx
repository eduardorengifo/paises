import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import SearchForm, { SearchFormProps } from './SearchForm';

export default {
  title: 'SearchForm',
  component: SearchForm,
  excludeStories: ['searchFormArgs']
} as Meta;

export const searchFormArgs = {
  languages: [
    { id: '1', value: 'es', text: 'Spanish' },
    { id: '2', value: 'en', text: 'English' }
  ],
  currencies: [{ id: '1', value: 'PEN', text: 'Nuevo sol' }],
  regions: [{ id: '2', value: 'Americas', text: 'Americas' }]
};

const Template: Story<SearchFormProps> = args => <SearchForm {...args} />;

export const Default = Template.bind({});
Default.args = searchFormArgs;
