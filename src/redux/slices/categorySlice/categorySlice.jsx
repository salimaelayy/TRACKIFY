import { createSlice } from '@reduxjs/toolkit';
import { fetchCategorysAsync,getCategoryAsync , addCategoryAsync, editCategoryAsync, deleteCategoryAsync } from '../categorySlice/categoryThunk';

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategorysAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategorysAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategorysAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCategoryAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategoryAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCategoryAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addCategoryAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCategoryAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.categories.push(action.payload);
      })
      .addCase(addCategoryAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editCategoryAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editCategoryAsync.fulfilled, (state, action) => {
        const { id, amount, date, description } = action.payload;
        const index = state.categories.findIndex((category) => category.id === id);
        if (index !== -1) {
          state.categories[index] = { id, amount, date, description };
        }
        state.loading = false;
      })
      .addCase(editCategoryAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteCategoryAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCategoryAsync.fulfilled, (state, action) => {
        state.categories = state.categories.filter((category) => category.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteCategoryAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: categoryReducer, actions: categoryActions } = categorySlice;
