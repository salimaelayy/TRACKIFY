import { createSlice } from '@reduxjs/toolkit';
import { fetchIncomesAsync,getIncomesAsync, addIncomeAsync, editIncomeAsync, deleteIncomeAsync } from '../incomeSlice/incomeThunk';

const initialState = {
  incomes: [],
  loading: false,
  error: null,
};

const incomeSlice = createSlice({
  name: 'income',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIncomesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIncomesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.incomes = action.payload;
      })
      .addCase(fetchIncomesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getIncomesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getIncomesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.incomes = action.payload;
      })
      .addCase(getIncomesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addIncomeAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addIncomeAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.incomes.push(action.payload);
      })
      .addCase(addIncomeAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editIncomeAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editIncomeAsync.fulfilled, (state, action) => {
        const { id, amount, date, description } = action.payload;
        const index = state.incomes.findIndex((income) => income.id === id);
        if (index !== -1) {
          state.incomes[index] = { id, amount, date, description };
        }
        state.loading = false;
      })
      .addCase(editIncomeAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteIncomeAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteIncomeAsync.fulfilled, (state, action) => {
        state.incomes = state.incomes.filter((income) => income.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteIncomeAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: incomeReducer, actions: incomeActions } = incomeSlice;
