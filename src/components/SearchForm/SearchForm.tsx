import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Flex, Button } from 'rebass/styled-components';
import { Input, Select, Label } from '@rebass/forms/styled-components';

export interface SearchFormSelectOption {
  text: string;
  value: string;
}

export interface SearchFormProps {
  languages: Array<SearchFormSelectOption>;
  currencies: Array<SearchFormSelectOption>;
  regions: Array<SearchFormSelectOption>;
  onSubmit: (data: {
    name: null;
    language: null;
    currency: null;
    region: null;
  }) => void;
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
            width={[1, 1, 1 / 2]}
            id="name"
            name="name"
            placeholder="Example: Perú or PE"
            ref={register}
          />
        </Box>
        <Box width={[1, 1 / 6]} p={2}>
          <Label htmlFor="language">Language</Label>
          <Select id="language" name="language" ref={register}>
            <option value="">-</option>
            {languages.map(language => (
              <option key={language.value} value={language.value}>
                {language.text}
              </option>
            ))}
          </Select>
        </Box>
        <Box width={[1, 1 / 6]} p={2}>
          <Label htmlFor="currency">Currency</Label>
          <Select id="currency" name="currency" ref={register}>
            <option value="">-</option>
            {currencies.map(currency => (
              <option key={currency.value} value={currency.value}>
                {currency.text}
              </option>
            ))}
          </Select>
        </Box>
        <Box width={[1, 1 / 6]} p={2}>
          <Label htmlFor="region">Region</Label>
          <Select id="region" name="region" ref={register}>
            <option value="">-</option>
            {regions.map(region => (
              <option key={region.value} value={region.value}>
                {region.text}
              </option>
            ))}
          </Select>
        </Box>
      </Flex>
      <Flex mx={-2} my={2} flexWrap="wrap">
        <Box px={2} ml="auto">
          <Button type="submit">Search</Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default SearchForm;
