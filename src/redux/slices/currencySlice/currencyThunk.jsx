import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchCurrencies = createAsyncThunk(
  'currencies/fetchCurrencies',
  async () => {
    try {
      const response = await fetch('https://openexchangerates.org/api/currencies.json');
      if (!response.ok) {
        throw new Error(`Failed to fetch currencies: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      return Object.keys(data).map(code => ({ code, name: data[code] }));
    } catch (error) {
      console.error('Error fetching currencies:', error);
      throw error;
    }
  }
);