import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsersAsync = createAsyncThunk(
  'user/fetchUsers',
  async () => {
    try {
      const response = await axios.get('http://localhost:3008/api/user');
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const addUserAsync = createAsyncThunk(
  'user/addUser',
  async (userData) => {
    try {
      const response = await axios.post('http://localhost:3008/api/user', userData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);


export const getUsersAsync = createAsyncThunk(
  'user/getUser',
  async ({ id}) => {
    try {
      const response = await axios.get(`http://localhost:3008/api/user/${id}`);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const editUserAsync = createAsyncThunk(
  'user/editUser',
  async ({ id, ...userData }) => {
    try {
      const response = await axios.put(`http://localhost:3008/api/user/${id}`, userData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const deleteUserAsync = createAsyncThunk(
  'user/deleteUser',
  async (id) => {
    try {
      await axios.delete(`http://localhost:3008/api/user/${id}`);
      return id;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);
