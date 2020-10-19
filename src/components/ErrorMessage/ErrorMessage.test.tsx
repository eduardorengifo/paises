import React from 'react';
import { render, screen } from '@testing-library/react';

import ErrorMessage from './ErrorMessage';
import { errorMessageArgs } from './ErrorMessage.stories';

test('render title and description', () => {
  render(<ErrorMessage {...errorMessageArgs} />);
  const titleNode = screen.getByTestId('error-message-title');
  const messageNode = screen.getByTestId('error-message-message');
  const tryAgainNode = screen.queryByTestId('error-message-try-again');

  expect(titleNode).toHaveTextContent(errorMessageArgs.title);
  expect(messageNode).toHaveTextContent(errorMessageArgs.message);
  expect(tryAgainNode).not.toBeInTheDocument();
});

test('render try again button with custom text', () => {
  const buttonText = 'Go to homepage';

  render(<ErrorMessage buttonText={buttonText} onTryAgain={() => {}} />);

  const tryAgainNode = screen.getByTestId('error-message-try-again');

  expect(tryAgainNode).toHaveTextContent(buttonText);
});
