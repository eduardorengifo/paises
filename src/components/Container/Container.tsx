import React from 'react';
import { Box } from 'rebass/styled-components';

import { CustomBoxKnownProps } from 'typings/formTypes';

export interface ContainerProps extends CustomBoxKnownProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, ...rest }) => (
  <Box
    {...rest}
    sx={{
      maxWidth: 912,
      mx: 'auto',
      px: 3
    }}
  >
    {children}
  </Box>
);

export default Container;
