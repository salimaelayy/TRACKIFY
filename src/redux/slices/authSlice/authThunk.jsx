import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginAsync = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3008/api/auth/login', credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const profileAsync = createAsyncThunk(
  'auth/profile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:3008/api/auth/profile');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logoutAsync = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('http://localhost:3008/api/auth/logout');
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
