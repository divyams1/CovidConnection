import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  // let middleWare = [thunk, logger];
  //   if (process.env.NODE_ENV === 'production'){
  //   middleWare = [thunk];
  // }
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
};

export default configureStore;

