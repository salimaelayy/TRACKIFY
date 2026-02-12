// expenseSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchexpensesAsync, getexpenseAsync, addexpenseAsync, editExpenseAsync, deleteexpenseAsync } from '../expenseSlice/expenseThunk';

const initialState = {
  expenses: [],
  loading: false,
  currentexpenses: null,
  error: null,
};

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all expenses
      .addCase(fetchexpensesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchexpensesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.expenses = action.payload; // must be array
      })
      .addCase(fetchexpensesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

      // Get single expense
      .addCase(getexpenseAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getexpenseAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.currentexpenses = action.payload;
      })
      .addCase(getexpenseAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

      // Add expense
      .addCase(addexpenseAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addexpenseAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.expenses.push(action.payload); // fixed typo
      })
      .addCase(addexpenseAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

      // Edit expense
      .addCase(editExpenseAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editExpenseAsync.fulfilled, (state, action) => {
        state.loading = false;
        const editedExpense = action.payload;
        const index = state.expenses.findIndex(expense => expense._id === editedExpense._id);
        if (index !== -1) state.expenses[index] = editedExpense;
      })
      .addCase(editExpenseAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

      // Delete expense
      .addCase(deleteexpenseAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteexpenseAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.expenses = state.expenses.filter(expense => expense._id !== action.payload);
      })
      .addCase(deleteexpenseAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { reducer: expenseReducer, actions: expenseActions } = expenseSlice;
