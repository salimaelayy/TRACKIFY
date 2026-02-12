import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Login thunk
export const loginAsync = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:3008/api/auth/login',
        credentials,
        { withCredentials: true } // important! send/receive cookie
      );
      return { user: { username: credentials.username, id: response.data.id } };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

// Profile thunk (check login persistence)
export const profileAsync = createAsyncThunk(
  'auth/profile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:3008/api/auth/profile', {
        withCredentials: true,
      });
      return { user: response.data.user || null };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Not authenticated');
    }
  }
);

// Logout thunk
export const logoutAsync = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('http://localhost:3008/api/auth/logout', {}, { withCredentials: true });
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Logout failed');
    }
  }
);
