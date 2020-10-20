import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams, useHistory } from 'react-router-dom';
import { Box, Button, Flex, Heading, Image } from 'rebass/styled-components';
import { Helmet } from 'react-helmet-async';

import { Container, ErrorMessage, InfoList, Loader } from 'components';
import { GetCountry, GetCountryVariables } from 'typings/GetCountry';
import { reduceItemNamesToStr } from 'lib/utils';

const GET_COUNTRY = gql`
  query GetCountry($alpha2Code: String!) {
    Country(alpha2Code: $alpha2Code) {
      _id
      flag {
        svgFile
      }
      alpha2Code
      name
      nativeName
      population
      subregion {
        _id
        name
        region {
          _id
          name
        }
      }
      capital
      currencies {
        _id
        code
        name
      }
      officialLanguages {
        _id
        name
      }
      topLevelDomains {
        _id
        name
      }
    }
  }
`;

const Country = () => {
  // @ts-ignore
  let { alpha2Code } = useParams();
  const history = useHistory();
  const { loading, data, error, refetch } = useQuery<
    GetCountry,
    GetCountryVariables
  >(GET_COUNTRY, {
    variables: {
      alpha2Code
    }
  });

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
    <Container data-testid="country-view">
      <Helmet>
        <title>{`Country: ${data.Country[0]?.name}`}</title>
      </Helmet>
      <Box py={[2, 3, 4]}>
        <Button
          data-testid="back-to-homepage"
          mb={4}
          onClick={() => history.push('/')}
        >
          Back
        </Button>
        <Flex flexWrap="wrap" mx={-2}>
          <Box width={[1, 1 / 2]} p={2}>
            <Image src={data.Country[0]?.flag?.svgFile} />
          </Box>
          <Box width={[1, 1 / 2]} p={2}>
            <Heading mb={4}>{data.Country[0]?.name}</Heading>
            <Flex flexWrap="wrap">
              <Box width={[1, 1, 1 / 2]}>
                <InfoList
                  items={[
                    {
                      name: 'Native Name',
                      value: data.Country[0]?.nativeName || '-'
                    },
                    {
                      name: 'Population',
                      value: data.Country[0]?.population.toString() || '-'
                    },
                    {
                      name: 'Region',
                      value: data.Country[0]?.subregion?.region?.name || '-'
                    },
                    {
                      name: 'Sub Region',
                      value: data.Country[0]?.subregion?.name || '-'
                    },
                    { name: 'Capital', value: data.Country[0]?.capital || '-' }
                  ]}
                />
              </Box>
              <Box width={[1, 1, 1 / 2]}>
                <InfoList
                  items={[
                    {
                      name: 'Top Level Domain',
                      value: reduceItemNamesToStr(
                        data.Country[0]?.topLevelDomains
                      )
                    },
                    {
                      name: 'Currencies',
                      value: reduceItemNamesToStr(data.Country[0]?.currencies)
                    },
                    {
                      name: 'Languages',
                      value: reduceItemNamesToStr(
                        data.Country[0]?.officialLanguages
                      )
                    }
                  ]}
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Country;
