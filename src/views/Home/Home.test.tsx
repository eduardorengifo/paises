import React from 'react';
import { render } from '@testing-library/react';

import Home from './Home';

test('render title', () => {
  const { getByText } = render(<Home />);
  const titleElement = getByText(/HomeView/i);
  expect(titleElement).toBeInTheDocument();
});
