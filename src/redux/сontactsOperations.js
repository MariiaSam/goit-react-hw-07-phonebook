import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://65a1a67142ecd7d7f0a6de69.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get("/contacts")

        return data

    } catch (error) {
        return rejectWithValue(error.message)
    }
})
  
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, { rejectWithValue }) => {
        try {
            const { data } = await axios.post("/contacts", newContact)

        return data

        } catch (error) {
            return rejectWithValue(error.message)
        }
    })


export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, { rejectWithValue }) => {
        try {
            const { data } = await axios.delete(`/contacts/${contactId}`, contactId)

        return data

        } catch (error) {
            return rejectWithValue(error.message)
        }
    })



    