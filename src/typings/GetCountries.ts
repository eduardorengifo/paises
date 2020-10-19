/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { _CountryFilter } from './globalTypes';

// ====================================================
// GraphQL query operation: GetCountries
// ====================================================

export interface GetCountries_Country_subregion_region {
  __typename: 'Region';
  name: string;
}

export interface GetCountries_Country_subregion {
  __typename: 'Subregion';
  region: GetCountries_Country_subregion_region | null;
}

export interface GetCountries_Country_flag {
  __typename: 'Flag';
  svgFile: string;
}

export interface GetCountries_Country {
  __typename: 'Country';
  _id: string | null;
  /**
   * ISO 3166-1 alpha-2 codes are two-letter country codes defined in ISO 3166-1,
   * part of the ISO 3166 standard published by the International Organization for
   * Standardization (ISO), to represent countries, dependent territories, and
   * special areas of geographical interest.
   * https: // en.m.wikipedia.org/wiki/ISO_3166-1_alpha-2
   */
  alpha2Code: string;
  name: string;
  capital: string;
  population: number;
  subregion: GetCountries_Country_subregion | null;
  flag: GetCountries_Country_flag | null;
}

export interface GetCountries {
  Country: (GetCountries_Country | null)[] | null;
}

export interface GetCountriesVariables {
  first?: number | null;
  offset?: number | null;
  filter?: _CountryFilter | null;
}
