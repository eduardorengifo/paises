import React from 'react';
import { Box, Heading, Text, Button } from 'rebass/styled-components';

import { CustomBoxKnownProps } from 'typings/formTypes';

export interface ErrorMessageProps extends CustomBoxKnownProps {
  title?: string;
  message?: string;
  buttonText?: string;
  onTryAgain?: () => any;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  title,
  message,
  buttonText,
  onTryAgain,
  children,
  ...rest
}) => {
  return (
    <Box
      {...rest}
      data-testid="error-message"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center'
      }}
    >
      <Heading data-testid="error-message-title" mb={2}>
        {title}
      </Heading>
      <Text data-testid="error-message-message">{message}</Text>
      {onTryAgain && (
        <Button
          data-testid="error-message-try-again"
          mt={4}
          onClick={onTryAgain}
        >
          {buttonText}
        </Button>
      )}
      {children}
    </Box>
  );
};

ErrorMessage.defaultProps = {
  title: 'Oops!',
  message: 'Not found',
  buttonText: 'Try again'
};

export default ErrorMessage;
