import React from 'react';
import { render } from '@testing-library/react';

import Country from './Country';

test('render title', () => {
  const { getByText } = render(<Country />);
  const titleElement = getByText(/CountryView/i);
  expect(titleElement).toBeInTheDocument();
});
