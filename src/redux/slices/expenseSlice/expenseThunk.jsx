import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchexpensesAsync = createAsyncThunk(
  'expense/fetchexpenses',
  async () => {
    try {
      const response = await axios.get('http://localhost:3008/api/expense/');
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const addexpenseAsync = createAsyncThunk(
  'expense/addexpense',
  async (expenseData) => {
    try {
      const response = await axios.post('http://localhost:3008/api/expense', expenseData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const editexpenseAsync = createAsyncThunk(
  'expense/editexpense',
  async ({ id, ...expenseData }) => {
    try {
      const response = await axios.put(`http://localhost:3008/api/expense/${id}`, expenseData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);
export const getexpenseAsync = createAsyncThunk(
  'expense/getexpense',
  async ({ id, ...expenseData }) => {
    try {
      const response = await axios.get(`http://localhost:3008/api/expense/${id}`, expenseData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const deleteexpenseAsync = createAsyncThunk(
  'expense/deleteexpense',
  async (id) => {
    try {
      await axios.delete(`http://localhost:3008/api/expense/${id}`);
      return id;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);
