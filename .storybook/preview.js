import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, lightTheme, darkTheme } from '../src/lib/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark']
    }
  }
};

const withThemeProvider = (Story, context) => {
  const theme = context.globals.theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Story {...context} />
      </>
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
