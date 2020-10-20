import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Loader from './Loader';

export default {
  title: 'Loader',
  components: Loader
} as Meta;

export const Default = () => <Loader />;
