import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './сontactsOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = false;
  state.contacts = payload;
  
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
    isDeleting: false,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, state => {
        state.isDeleting = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isDeleting = false;
        state.error = false;
        const index = state.contacts.findIndex(
          contact => contact.id === payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.isDeleting = false;
        state.error = payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
