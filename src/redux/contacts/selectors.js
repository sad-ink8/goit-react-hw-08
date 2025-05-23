import { selectNameFilter } from "../filters/selectors";
import { createSelector } from "@reduxjs/toolkit";

// Selectors

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    console.log("Calculating visible contacts");

    if (!Array.isArray(contacts)) return [];
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
