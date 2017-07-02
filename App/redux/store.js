import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './reducers';
import middlewares from './middlewares';

const store = createStore(reducers, applyMiddleware(...middlewares));

if (module.hot) {
  module.hot.accept(() => {
    store.replaceReducer(combineReducers(reducers));
  });
}

export default store;