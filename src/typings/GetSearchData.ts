/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSearchData
// ====================================================

export interface GetSearchData_Language {
  __typename: 'Language';
  _id: string | null;
  iso639_1: string;
  name: string;
}

export interface GetSearchData_Currency {
  __typename: 'Currency';
  _id: string | null;
  code: string;
  name: string;
}

export interface GetSearchData_Region {
  __typename: 'Region';
  _id: string | null;
  name: string;
}

export interface GetSearchData {
  Language: (GetSearchData_Language | null)[] | null;
  Currency: (GetSearchData_Currency | null)[] | null;
  Region: (GetSearchData_Region | null)[] | null;
}
