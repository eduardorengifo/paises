import React from 'react';
import { Box, Flex } from 'rebass/styled-components';

import { Container, CountryCard, SearchForm } from 'components';

const Home = () => (
  <Container>
    <Box mb={3} py={3}>
      <SearchForm
        languages={[
          { value: 'es', text: 'Español' },
          { value: 'en', text: 'English' }
        ]}
        currencies={[{ value: 'PEN', text: 'Nuevo sol' }]}
        regions={[{ value: 'Americas', text: 'Americas' }]}
        onSubmit={() => {}}
      />
    </Box>
    <Flex flexWrap="wrap" mx={-2}>
      {[0, 1, 2, 3, 4, 5, 6].map(n => (
        <Box key={n} px={2} py={2} width={[1, 1 / 2, 1 / 3]}>
          <CountryCard
            flag="https://restcountries.eu/data/per.svg"
            title="Perú"
            InfoListProps={{
              items: [
                { name: 'Population', value: '24.500706496028684' },
                { name: 'Region', value: 'South America' },
                { name: 'Capital', value: 'Lima' }
              ]
            }}
          />
        </Box>
      ))}
    </Flex>
  </Container>
);

export default Home;
