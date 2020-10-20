import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ErrorMessage, { ErrorMessageProps } from './ErrorMessage';

export default {
  title: 'ErrorMessage',
  component: ErrorMessage,
  excludeStories: ['errorMessageArgs']
} as Meta;

export const errorMessageArgs = {
  title: 'Oops!',
  message: 'Not found',
  buttonText: 'Try again'
};

const Template: Story<ErrorMessageProps> = args => <ErrorMessage {...args} />;

export const Default = Template.bind({});
Default.args = errorMessageArgs;
