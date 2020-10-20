import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from './Footer';
import { footerArgs } from './Footer.stories';

test('render name', () => {
  render(<Footer {...footerArgs} />);

  expect(screen.getByText(/Países/i)).toBeInTheDocument();
});
