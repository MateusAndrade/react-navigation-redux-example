import { combineReducers } from 'redux';

import contacts from './contactsReducer';
import user from './userReducer';

// Here you create your rootReducer, where
// you combine your different reducers
const rootReducer = combineReducers({
  contacts,
  user,
});

export default rootReducer;