import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategorysAsync = createAsyncThunk(
  'category/fetchCategorys',
  async () => {
    try {
      const response = await axios.get('http://localhost:3008/api/categories');

      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const addCategoryAsync = createAsyncThunk(
  'category/addCategory',
  async (categoryData) => {
    try {
      const response = await axios.post('http://localhost:3008/api/categories', categoryData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);
export const getCategoryAsync = createAsyncThunk(
  'expense/getCategory',
  async ({ id}) => {
    try {
      const response = await axios.get(`http://localhost:3008/api/categories/${id}`);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const editCategoryAsync = createAsyncThunk(
  'category/editCategory',
  async ({ id, ...incomeData }) => {
    try {
      const response = await axios.put(`http://localhost:3008/api/categories/${id}`, categoryData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const deleteCategoryAsync = createAsyncThunk(
  'category/deleteCategory',
  async (id) => {
    try {
      await axios.delete(`http://localhost:3008/api/categories/${id}`);
      return id;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);
