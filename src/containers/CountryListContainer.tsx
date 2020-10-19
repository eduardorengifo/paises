import React, { useMemo, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Box, Flex, Button } from 'rebass/styled-components';
import { useHistory } from 'react-router-dom';

import { CountryCard, Loader, ErrorMessage } from 'components';
import { SearchFormSubmitData } from 'components/SearchForm/SearchForm';
import { GetCountries, GetCountriesVariables } from '../typings/GetCountries';
import { countryVariablesFilter } from 'lib/utils';

export interface CountryListContainerProps extends SearchFormSubmitData {}

const GET_COUNTRIES = gql`
  query GetCountries($first: Int, $offset: Int, $filter: _CountryFilter) {
    Country(first: $first, offset: $offset, filter: $filter) {
      _id
      alpha2Code
      name
      capital
      population
      subregion {
        region {
          name
        }
      }
      flag {
        svgFile
      }
    }
  }
`;

const CountryListContainer: React.FC<CountryListContainerProps> = ({
  language,
  name,
  region,
  currency
}) => {
  const history = useHistory();
  const [hasMore, setHasMore] = useState(true);
  const variables = useMemo(() => {
    const opts = {
      offset: 0,
      first: 10,
      filter: countryVariablesFilter({ name, language, currency, region })
    };

    setHasMore(true);

    return opts;
  }, [language, name, region, currency]);
  const { loading, error, data, fetchMore, refetch } = useQuery<
    GetCountries,
    GetCountriesVariables
  >(GET_COUNTRIES, {
    variables
  });

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        offset: data?.Country?.length || '0'
      },
      updateQuery: (
        prev,
        {
          fetchMoreResult
        }: { fetchMoreResult?: { Country: Array<GetCountries> } }
      ) => {
        const prevCountry = prev.Country || [];
        if (
          !fetchMoreResult ||
          !fetchMoreResult.Country ||
          fetchMoreResult.Country.length === 0
        ) {
          setHasMore(false);
          return prev;
        }
        return Object.assign({}, prev, {
          Country: [...prevCountry, ...fetchMoreResult.Country]
        });
      }
    });
  };

  if (loading) return <Loader height="40vh" />;
  if (error)
    return (
      <ErrorMessage
        height="40vh"
        message={error.message}
        onTryAgain={refetch}
      />
    );
  if (!data || !data?.Country || data?.Country?.length === 0)
    return <ErrorMessage height="40vh" />;

  return (
    <div>
      <Flex flexWrap="wrap" mx={-2}>
        {data.Country.map(country => (
          <Box
            key={country?._id || '1'}
            px={2}
            py={2}
            width={[1, 1 / 2, 1 / 3]}
          >
            <Box
              sx={{ cursor: 'pointer' }}
              onClick={() => history.push(`/countries/${country?.alpha2Code}`)}
            >
              <CountryCard
                flag={country?.flag?.svgFile || ''}
                title={country?.name || ''}
                InfoListProps={{
                  items: [
                    {
                      name: 'Population',
                      value: country?.population.toString() || '-'
                    },
                    {
                      name: 'Region',
                      value: country?.subregion?.region?.name || '-'
                    },
                    { name: 'Capital', value: country?.capital || '-' }
                  ]
                }}
              />
            </Box>
          </Box>
        ))}
      </Flex>
      {hasMore ? (
        <Flex justifyContent="center" alignItems="center" pt={4} pb={2}>
          <Button onClick={handleLoadMore}>Load More</Button>
        </Flex>
      ) : (
        <ErrorMessage pt={4} pb={2} message="No more data." />
      )}
    </div>
  );
};

export default CountryListContainer;
