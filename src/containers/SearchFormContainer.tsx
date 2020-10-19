import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { SearchForm, Loader, ErrorMessage } from 'components';
import { SearchFormSubmitData } from 'components/SearchForm/SearchForm';
import { GetSearchData } from 'typings/GetSearchData';

export interface SearchFormContainerProps {
  onSubmit: (data: SearchFormSubmitData) => void;
  onCompleted?: () => any;
}

const GET_SEARCH_DATA = gql`
  query GetSearchData {
    Language {
      _id
      iso639_1
      name
    }
    Currency {
      _id
      code
      name
    }
    Region {
      _id
      name
    }
  }
`;

const SearchFormContainer: React.FC<SearchFormContainerProps> = ({
  onSubmit,
  onCompleted
}) => {
  const { loading, error, data, refetch } = useQuery<GetSearchData>(
    GET_SEARCH_DATA,
    {
      onCompleted
    }
  );

  if (loading) return <Loader height="40vh" />;
  if (error)
    return (
      <ErrorMessage
        height="40vh"
        message={error.message}
        onTryAgain={refetch}
      />
    );

  return (
    <SearchForm
      languages={data?.Language?.map(language => ({
        id: language?._id || '1',
        text: language?.name || 'Text',
        value: language?.iso639_1 || 'Value'
      }))}
      currencies={data?.Currency?.map(currency => ({
        id: currency?._id || '1',
        text: currency?.name || 'Text',
        value: currency?.code || 'Value'
      }))}
      regions={data?.Region?.map(region => ({
        id: region?._id || '1',
        text: region?.name || 'Text',
        value: region?.name || 'Value'
      }))}
      onSubmit={onSubmit}
    />
  );
};

export default SearchFormContainer;
