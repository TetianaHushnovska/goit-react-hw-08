import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.goit.global';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        console.log('data', response.data);
        return response.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', contact);
        return response.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/daleteContact',
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);