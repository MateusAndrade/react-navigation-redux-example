import {
  GET_CONTACTS_REQUEST,
  GET_CONTACTS_REQUEST_SUCCESS,
  GET_CONTACTS_REQUEST_FAIL,
  REQUEST_DELETE_CONTACT,
  REQUEST_DELETE_CONTACT_SUCCESS,
  REQUEST_DELETE_CONTACT_FAIL,
  REQUEST_RESET_DELETE_CONTACT,
} from '../config/types';

const initialState = {
  deletedContact: false,
  isDeleteingContact: false,
  isFetching: false,
  contacts: [],
  error: null,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        deletedContact: false,
        deletedContact: false,
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

    case REQUEST_DELETE_CONTACT:
      return Object.assign({}, state, {
        isDeletingContact: true,
      });

    case REQUEST_DELETE_CONTACT_SUCCESS:
      return Object.assign({}, state, {
        deletedContact: true,
        contacts: action.contacts,
        isDeletingContact: true,
      });

    case REQUEST_DELETE_CONTACT_FAIL:
      return Object.assign({}, state, {
        isDeletingContact: false,
      });

    case REQUEST_RESET_DELETE_CONTACT:
      return Object.assign({}, state, {
        deletedContact: false,
      });
    
    default:
      return state;
  }
};

export default contactsReducer;