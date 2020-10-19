import React from 'react';
import { Flex, Text, Box } from 'rebass/styled-components';
import { Switch } from '@rebass/forms/styled-components';

import Container from '../Container';

export interface HeaderProps {
  title: string;
  isDarkTheme?: boolean;
  onChangeTheme?: () => any;
}

const Header: React.FC<HeaderProps> = ({
  title,
  isDarkTheme,
  onChangeTheme
}) => (
  <Box
    as="header"
    variant="appBar"
    data-testid="header"
    sx={{ top: 0, left: 'auto', right: 0, position: 'fixed' }}
  >
    <Container>
      <Flex height="50px" alignItems="center">
        <Text data-testid="header-title" p={2} fontWeight="bold">
          {title}
        </Text>
        <Box mx="auto" />
        {onChangeTheme && (
          <Switch
            data-testid="header-switch"
            checked={isDarkTheme}
            onClick={onChangeTheme}
          />
        )}
      </Flex>
    </Container>
  </Box>
);

export default Header;
