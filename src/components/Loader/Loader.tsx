import React from 'react';
import { useTheme } from 'styled-components';
import { default as RLoader } from 'react-loader-spinner';
import { Box } from 'rebass/styled-components';

import { CustomBoxKnownProps } from 'typings/formTypes';

const Loader: React.FC<CustomBoxKnownProps> = props => {
  const { colors } = useTheme();

  return (
    <Box
      {...props}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center'
      }}
    >
      <RLoader
        type="Oval"
        color={colors.primary}
        height={60}
        width={60}
        timeout={3000}
      />
    </Box>
  );
};

export default Loader;
