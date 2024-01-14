import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectIsDeleting = state => state.contacts.isDeleting;


export const selectActiveContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

