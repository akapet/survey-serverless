import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'

import { reducers } from './reducers/index'

export function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(
      thunkMiddleware
    )
  );

  return store;
};


export const store = configureStore();
