import React from 'react';
import { Box } from 'rebass/styled-components';

export interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <Box
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
