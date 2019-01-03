import {
  GET_CONTACTS_REQUEST,
  GET_CONTACTS_REQUEST_SUCCESS,
  GET_CONTACTS_REQUEST_FAIL,
  GET_USER_REQUEST,
  GET_USER_REQUEST_SUCCESS,
  GET_USER_REQUEST_FAIL,
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
