import React from 'react';
import { render, screen } from '@testing-library/react';

import CountryCard from './CountryCard';
import { countryCardArgs } from './CountryCard.stories';

test('render CountryCard', () => {
  render(<CountryCard {...countryCardArgs} />);

  const flagNode = screen.getByTestId('country-card-flag');
  const titleNode = screen.getByTestId('country-card-title');
  const infoListNode = screen.getByTestId('info-list');

  expect(flagNode).toHaveAttribute('src', countryCardArgs.flag);
  expect(titleNode).toHaveTextContent(countryCardArgs.title);
  expect(infoListNode).toBeInTheDocument();
});
