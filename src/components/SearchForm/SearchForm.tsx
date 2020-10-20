import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Flex, Button } from 'rebass/styled-components';
import { Input, Select, Label } from '@rebass/forms/styled-components';

export interface SearchFormSelectOption {
  id: string;
  text: string;
  value: string;
}

export interface SearchFormSubmitData {
  name?: string;
  language?: string;
  currency?: string;
  region?: string;
}

export interface SearchFormProps {
  languages?: Array<SearchFormSelectOption>;
  currencies?: Array<SearchFormSelectOption>;
  regions?: Array<SearchFormSelectOption>;
  onSubmit: (data: SearchFormSubmitData) => any;
}

const SearchForm: React.FC<SearchFormProps> = ({
  languages,
  currencies,
  regions,
  onSubmit
}) => {
  const { register, handleSubmit } = useForm();

  return (
    <Box as="form" data-testid="search-form" onSubmit={handleSubmit(onSubmit)}>
      <Flex flexWrap="wrap" mx={-2}>
        <Box width={[1, 1 / 2]} p={2}>
          <Label htmlFor="name">Name or alpha2Code</Label>
          <Input
            data-testid="search-form-input-name"
            width={[1, 1, 1 / 2]}
            id="name"
            name="name"
            placeholder="Example: Perú or PE"
            ref={register}
          />
        </Box>
        {languages && (
          <Box width={[1, 1 / 6]} p={2}>
            <Label htmlFor="language">Language</Label>
            <Select
              data-testid="search-form-select-language"
              id="language"
              name="language"
              ref={register}
            >
              <option value="">-</option>
              {languages.map(language => (
                <option key={language.id} value={language.value}>
                  {language.text}
                </option>
              ))}
            </Select>
          </Box>
        )}
        {currencies && (
          <Box width={[1, 1 / 6]} p={2}>
            <Label htmlFor="currency">Currency</Label>
            <Select
              data-testid="search-form-select-currency"
              id="currency"
              name="currency"
              ref={register}
            >
              <option value="">-</option>
              {currencies.map(currency => (
                <option key={currency.id} value={currency.value}>
                  {currency.text}
                </option>
              ))}
            </Select>
          </Box>
        )}
        {regions && (
          <Box width={[1, 1 / 6]} p={2}>
            <Label htmlFor="region">Region</Label>
            <Select
              data-testid="search-form-select-region"
              id="region"
              name="region"
              ref={register}
            >
              <option value="">-</option>
              {regions.map(region => (
                <option key={region.id} value={region.value}>
                  {region.text}
                </option>
              ))}
            </Select>
          </Box>
        )}
      </Flex>
      <Flex mx={-2} my={2} flexWrap="wrap">
        <Box px={2} ml="auto">
          <Button data-testid="search-form-submit" type="submit">
            Search
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default SearchForm;
