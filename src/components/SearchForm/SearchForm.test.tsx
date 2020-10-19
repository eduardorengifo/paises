import React from 'react';
import { render, screen } from '@testing-library/react';

import SearchForm from './SearchForm';
import { searchFormArgs } from './SearchForm.stories';

test('render only search input', () => {
  render(<SearchForm onSubmit={() => {}} />);

  const nameNode = screen.getByTestId('search-form-input-name');
  const submitNode = screen.getByTestId('search-form-submit');
  const languageNode = screen.queryByTestId('search-form-select-language');
  const currencyNode = screen.queryByTestId('search-form-select-currency');
  const regionNode = screen.queryByTestId('search-form-select-region');

  expect(nameNode).toBeInTheDocument();
  expect(submitNode).toBeInTheDocument();
  expect(languageNode).not.toBeInTheDocument();
  expect(currencyNode).not.toBeInTheDocument();
  expect(regionNode).not.toBeInTheDocument();
});

test('render search input with filters', () => {
  render(<SearchForm {...searchFormArgs} onSubmit={() => {}} />);

  const nameNode = screen.getByTestId('search-form-input-name');
  const submitNode = screen.getByTestId('search-form-submit');
  const languageNode = screen.getByTestId('search-form-select-language');
  const currencyNode = screen.getByTestId('search-form-select-currency');
  const regionNode = screen.getByTestId('search-form-select-region');

  expect(nameNode).toBeInTheDocument();
  expect(submitNode).toBeInTheDocument();
  expect(languageNode).toBeInTheDocument();
  expect(currencyNode).toBeInTheDocument();
  expect(regionNode).toBeInTheDocument();
});
