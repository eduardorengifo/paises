import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Box } from 'rebass/styled-components';

import Container from './Container';

export default {
  title: 'Container',
  component: Container
} as Meta;

export const Default = () => (
  <Container>
    <Box bg="primary" p={4} height="500px" />
  </Container>
);
