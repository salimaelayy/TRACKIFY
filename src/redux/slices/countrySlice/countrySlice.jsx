import { createSlice } from '@reduxjs/toolkit';
import { fetchCountries } from '../countrySlice/countryThunk';


const initialState = {
  countries: [],
  loading: false,
  error: null,
};
const countriesSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.countries = [];
      });
  },
});

export const { reducer: countryReducer, actions: countryActions } = countriesSlice;
