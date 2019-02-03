import {
  GET_USER_REQUEST,
  GET_USER_REQUEST_SUCCESS,
  GET_USER_REQUEST_FAIL,
} from '../config/types';

const initialState = {
  isFetching: false,
  userInfo: { name: { first: '' } }, //fix para nao crashar quando iniciar
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case GET_USER_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        userInfo: action.userInfo,
      });

    case GET_USER_REQUEST_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });

    default:
      return state;
  }
};

export default userReducer;