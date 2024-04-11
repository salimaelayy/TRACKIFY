import { createSelector } from 'reselect';

const currenciesSelector = state => state.currencies || [];
const countriesSelector = state => state.countries || [];

export const getCurrencies = createSelector(
  currenciesSelector,
  currencies => currencies
);

export const selectCountries = createSelector(
  countriesSelector,
  countries => countries?.countries || []
);