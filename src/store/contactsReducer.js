import {
  GET_CONTACTS_REQUEST,
  GET_CONTACTS_REQUEST_SUCCESS,
  GET_CONTACTS_REQUEST_FAIL,
} from '../config/types';

const initialState = {
  isFetching: false,
  contacts: [],
  error: null,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case GET_CONTACTS_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        contacts: action.contacts,
      });

    case GET_CONTACTS_REQUEST_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });

    default:
      return initialState;
  }
};

export default contactsReducer;