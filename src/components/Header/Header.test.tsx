import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from './Header';
import { headerArgs } from './Header.stories';

test('render only title', () => {
  render(<Header {...headerArgs} />);

  const titleNode = screen.getByTestId('header-title');

  expect(titleNode).toHaveTextContent(headerArgs.title);
});

test('render title and switch', () => {
  render(<Header {...headerArgs} isDarkTheme onChangeTheme={() => {}} />);

  const titleNode = screen.getByTestId('header-title');
  const switchNode = screen.getByTestId('header-switch');

  expect(titleNode).toHaveTextContent(headerArgs.title);
  expect(switchNode).toBeInTheDocument();
  expect(switchNode).toHaveAttribute('aria-checked', 'true');
  switchNode.click();
  expect(switchNode).not.toHaveAttribute('aria-checked', 'false');
});
