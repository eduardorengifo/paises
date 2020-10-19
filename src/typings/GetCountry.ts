/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCountry
// ====================================================

export interface GetCountry_Country_flag {
  __typename: 'Flag';
  svgFile: string;
}

export interface GetCountry_Country_subregion_region {
  __typename: 'Region';
  _id: string | null;
  name: string;
}

export interface GetCountry_Country_subregion {
  __typename: 'Subregion';
  _id: string | null;
  name: string;
  region: GetCountry_Country_subregion_region | null;
}

export interface GetCountry_Country_currencies {
  __typename: 'Currency';
  _id: string | null;
  code: string;
  name: string;
}

export interface GetCountry_Country_officialLanguages {
  __typename: 'Language';
  _id: string | null;
  name: string;
}

export interface GetCountry_Country_topLevelDomains {
  __typename: 'TopLevelDomain';
  _id: string | null;
  name: string;
}

export interface GetCountry_Country {
  __typename: 'Country';
  _id: string | null;
  flag: GetCountry_Country_flag | null;
  /**
   * ISO 3166-1 alpha-2 codes are two-letter country codes defined in ISO 3166-1,
   * part of the ISO 3166 standard published by the International Organization for
   * Standardization (ISO), to represent countries, dependent territories, and
   * special areas of geographical interest.
   * https: // en.m.wikipedia.org/wiki/ISO_3166-1_alpha-2
   */
  alpha2Code: string;
  name: string;
  nativeName: string;
  population: number;
  subregion: GetCountry_Country_subregion | null;
  capital: string;
  currencies: (GetCountry_Country_currencies | null)[] | null;
  officialLanguages: (GetCountry_Country_officialLanguages | null)[] | null;
  /**
   * A country code top-level domain (ccTLD) is an Internet top-level domain
   * generally used or reserved for a country, sovereign state, or dependent
   * territory identified with a country code.
   * https: // en.m.wikipedia.org/wiki/Country_code_top-level_domain
   */
  topLevelDomains: (GetCountry_Country_topLevelDomains | null)[] | null;
}

export interface GetCountry {
  Country: (GetCountry_Country | null)[] | null;
}

export interface GetCountryVariables {
  alpha2Code: string;
}
