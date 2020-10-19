import React from 'react';
import { Box, Card, Image, Heading } from 'rebass/styled-components';

import InfoList, { InfoListProps } from 'components/InfoList/InfoList';

export interface CountryCardProps {
  flag: string;
  title: string;
  InfoListProps: InfoListProps;
}

const CountryCard: React.FC<CountryCardProps> = ({
  flag,
  title,
  InfoListProps
}) => (
  <Card data-testid="country-card" p={0}>
    <Image
      sx={{ width: '100%', height: '185px' }}
      data-testid="country-card-flag"
      src={flag}
    />
    <Box px={3} pt={2} pb={3}>
      <Heading
        variant="headingEllipsis"
        data-testid="country-card-title"
        as="h3"
        mb={2}
      >
        {title}
      </Heading>
      <InfoList {...InfoListProps} />
    </Box>
  </Card>
);

export default CountryCard;
