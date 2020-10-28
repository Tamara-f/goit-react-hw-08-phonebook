import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  addContactsSuccess,
  changeFilter,
  fetchContactsSuccess,
  removeContactsSuccess,
} from './phonebookActions';

const onAddContact = (state, action) => {
  const newContact = action.payload;
  return [...state, newContact];
};

const onRemoveContact = (state, action) =>
  state.filter(contact => contact.id !== action.payload);

const items = createReducer([], {
  [fetchContactsSuccess]: (state, action) => action.payload,
  [addContactsSuccess]: onAddContact,
  [removeContactsSuccess]: onRemoveContact,
});

const filter = createReducer('', {
  [changeFilter]: (state, action) => action.payload,
});

// const loading = createReducer(false, {
//   [addContactsRequest]: () => true,
//   [addContactsSuccess]: () => false,
//   [addContactsError]: () => false,
// });
export default combineReducers({
  items,
  // loading,
  filter,
});
