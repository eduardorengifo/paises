import React from 'react';
import { render } from '@testing-library/react';

import NotFound from './NotFound';

test('render title', () => {
  const { getByText } = render(<NotFound />);
  const titleElement = getByText(/NotFoundView/i);
  expect(titleElement).toBeInTheDocument();
});
