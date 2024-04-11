import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrencies } from '../currencySlice/currencyThunk';


const initialState = {
  currencies: [],
  loading: false,
  error: null,
};
const currenciesSlice = createSlice({
    name: 'currency',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        return action.payload;
      })
    },
  });



export const { reducer: currencyReducer, actions: currencyActions } = currenciesSlice;
