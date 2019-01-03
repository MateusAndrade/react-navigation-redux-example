import {
  createStore,
  applyMiddleware,
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

/* Here we create our store for redux, and connect it to devtools */
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

export default store;
