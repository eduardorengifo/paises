import React from 'react';
import { render, screen } from '@testing-library/react';

import InfoList from './InfoList';
import { infoListArgs } from './InfoList.stories';

test('render items', () => {
  render(<InfoList {...infoListArgs} />);

  const infoListItemNodes = screen.getAllByTestId('info-list-item');

  expect(infoListItemNodes).toHaveLength(3);
});
