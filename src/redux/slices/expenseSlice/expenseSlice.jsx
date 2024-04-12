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
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchexpensesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchexpensesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.expenses = action.payload;
      })
      .addCase(fetchexpensesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
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
        state.error = action.payload;
      })
      .addCase(addexpenseAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addexpenseAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.currentExpense.push(action.payload);
      })
      .addCase(addexpenseAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editExpenseAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editExpenseAsync.fulfilled, (state, action) => {
        const editedExpense = action.payload;
        state.loading = false;
        const index = state.expenses.findIndex((expense) => expense.id === editedExpense.id);
        if (index !== -1) {
          // Update the expense at the found index
          state.expenses[index] = editedExpense;
        }
      })
      
      .addCase(editExpenseAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteexpenseAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteexpenseAsync.fulfilled, (state, action) => {
        state.expenses = state.expenses.filter((expense) => expense.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteexpenseAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: expenseReducer, actions: expenseActions } = expenseSlice;
