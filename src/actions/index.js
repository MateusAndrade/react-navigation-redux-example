import {
  GET_CONTACTS_REQUEST,
  GET_CONTACTS_REQUEST_SUCCESS,
  GET_CONTACTS_REQUEST_FAIL,
  GET_USER_REQUEST,
  GET_USER_REQUEST_SUCCESS,
  GET_USER_REQUEST_FAIL,
  REQUEST_DELETE_CONTACT,
  REQUEST_DELETE_CONTACT_SUCCESS,
  REQUEST_DELETE_CONTACT_FAIL,
  REQUEST_RESET_DELETE_CONTACT,
} from '../config/types';

import { fetchUser, fetchUsers } from '../api';

export const getUserInfo = () => async (dispatch) => {

  dispatch(requestUserInfo());

  const { error, success, payload } = await fetchUser();

  if (success) {
    dispatch(requestUserInfoSuccess(payload));
  } else {
    dispatch(requestUserInfoFailed(error));
  }
};

export const getContactsInfo = () => async (dispatch) => {

  dispatch(requestContactsInfo());

  const { error, success, payload } = await fetchUsers();

  if (success) {
    dispatch(requestContactsInfoSuccess(payload));
  } else {
    dispatch(requestContactsInfoFailed(error));
  }
};

export const deleteContact = contactToDelete => async (dispatch, getState) => {
  dispatch(requestDeleteContact());

  const { contacts } = getState();

  try {
    const newContactList = contacts.contacts.filter(contact => contact.email !== contactToDelete.email);
  
    dispatch(requestDeleteContactSuccess(newContactList));
  } catch (error) {
    dispatch(requestDeleteContactFail());
  }
};

/* Contacts Dispatch */

export const requestContactsInfo = () => ({
  type: GET_CONTACTS_REQUEST,
});

export const requestContactsInfoSuccess = contacts => ({
  type: GET_CONTACTS_REQUEST_SUCCESS,
  contacts,
});

export const requestContactsInfoFailed = error => ({
  type: GET_CONTACTS_REQUEST_FAIL,
  error,
});

export const resetDeleteContact = () => ({
  type: REQUEST_RESET_DELETE_CONTACT,
});

export const requestDeleteContact = () => ({
  type: REQUEST_DELETE_CONTACT,
});

export const requestDeleteContactSuccess = contacts => ({
  type: REQUEST_DELETE_CONTACT_SUCCESS,
  contacts,
});

export const requestDeleteContactFail = () => ({
  type: REQUEST_DELETE_CONTACT_FAIL,
});

/* Contacts Dispatch */

/* User Dispatch */

export const requestUserInfo = () => ({
  type: GET_USER_REQUEST,
});

export const requestUserInfoSuccess = userInfo => ({
  type: GET_USER_REQUEST_SUCCESS,
  userInfo,
});

export const requestUserInfoFailed = error => ({
  type: GET_USER_REQUEST_FAIL,
  error,
});

/* User Dispatch */
