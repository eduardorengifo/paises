import { SearchFormSubmitData } from 'components/SearchForm/SearchForm';

export const reduceItemNamesToStr = (items: any) =>
  items.map((item: any) => item.name).join(',');

export const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const countryVariablesFilter = ({
  name,
  language,
  currency,
  region
}: SearchFormSubmitData) => {
  let filter = {};

  if (name) {
    filter = {
      ...filter,
      OR: [
        {
          alpha2Code: name
        },
        {
          name: capitalizeFirstLetter(name)
        },
        {
          nativeName: name
        },
        {
          name_contains: name
        }
      ]
    };
  }

  if (language) {
    filter = {
      ...filter,
      officialLanguages: {
        iso639_1: language
      }
    };
  }

  if (currency) {
    filter = {
      ...filter,
      currencies: {
        code: currency
      }
    };
  }

  if (region) {
    filter = {
      ...filter,
      subregion: {
        region: {
          name: region
        }
      }
    };
  }

  return filter;
};
