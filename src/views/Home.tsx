import React, { useState } from 'react';
import { Box } from 'rebass/styled-components';

import { Container } from 'components';
import { SearchFormSubmitData } from 'components/SearchForm/SearchForm';
import { SearchFormContainer, CountryListContainer } from 'containers';

const Home = () => {
  const [formData, setFormData] = useState<SearchFormSubmitData>({
    name: '',
    language: '',
    currency: '',
    region: ''
  });
  const [showCountryList, setShowCountryList] = useState(false);

  return (
    <Container data-testid="home-view">
      <Box mb={3} py={3}>
        <SearchFormContainer
          onSubmit={setFormData}
          onCompleted={() => setShowCountryList(true)}
        />
      </Box>
      {showCountryList && <CountryListContainer {...formData} />}
    </Container>
  );
};

export default Home;
