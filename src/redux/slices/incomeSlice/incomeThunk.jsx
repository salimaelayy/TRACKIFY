import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchIncomesAsync = createAsyncThunk(
  'income/fetchIncomes',
  async () => {
    try {
      const response = await axios.get('http://localhost:3008/api/income');
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const addIncomeAsync = createAsyncThunk(
  'income/addIncome',
  async (incomeData) => {
    try {
      const response = await axios.post('http://localhost:3008/api/income', incomeData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const getIncomesAsync = createAsyncThunk(
  'income/getIncome',
  async () => {
    try {
      const response = await axios.get(`http://localhost:3008/api/income/${id}`);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);  

export const editIncomeAsync = createAsyncThunk(
  'income/editIncome',
  async ({ id, ...incomeData }) => {
    try {
      const response = await axios.put(`http://localhost:3008/api/income/${id}`, incomeData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const deleteIncomeAsync = createAsyncThunk(
  'income/deleteIncome',
  async (id) => {
    try {
      await axios.delete(`http://localhost:3008/api/income/${id}`);
      return id;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);
