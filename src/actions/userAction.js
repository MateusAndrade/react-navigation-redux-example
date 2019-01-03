import {
  GET_USER_REQUEST,
  GET_USER_REQUEST_SUCCESS,
  GET_USER_REQUEST_FAIL,
} from '../config/types';

import { fetchUser } from '../api/user';

export const getUserInfo = () => async (dispatch) => {

  const { error, success, payload } = await fetchUser();

  if (success) {
    dispatch(requestUserInfoSuccess(payload));
  } else {
    dispatch(requestUserInfoFailed(error));
  }
};

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