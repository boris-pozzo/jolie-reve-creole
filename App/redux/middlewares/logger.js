/**
 * Dependencies
 */

import { createLogger } from 'redux-logger';
import { Iterable } from 'immutable';

/**
 * Serialize state to JS
 */

const serializeState = state => {
  const newState = {};
  Object.keys(state).forEach(key => {
    if (Iterable.isIterable(state[key])) {
      newState[key] = state[key].toJS();
    } else {
      newState[key] = state[key];
    }
  });
  return newState;
};

/**
 * Logger middleware
 */

const loggerMiddleware = createLogger({
  collapsed: true,
  predicate: () => process.env.NODE_ENV !== 'production',
  duration: true,
  stateTransformer: serializeState,
});

/**
 * Interface
 */

export default loggerMiddleware;