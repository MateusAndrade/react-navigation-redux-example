import { combineReducers } from 'redux';

import user from './userReducer';

// Here you create your rootReducer, where
// you combine your different reducers
const rootReducer = combineReducers({
  user,
});

export default rootReducer;