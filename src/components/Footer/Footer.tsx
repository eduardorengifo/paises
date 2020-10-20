import React from 'react';
import { Box, Text } from 'rebass/styled-components';

import Container from '../Container';

export interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  const d = new Date();

  return (
    <Box data-testid="footer" as="footer" sx={{ textAlign: 'center', py: 4 }}>
      <Container>
        <Text>{`Copyright © ${d.getFullYear()} ${name}.`}</Text>
      </Container>
    </Box>
  );
};

export default Footer;
