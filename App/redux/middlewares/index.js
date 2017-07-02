/**
 * Dependencies
 */

import thunk from 'redux-thunk';

/**
 * Middlewares
 */

import logger from './logger';
import 'whatwg-fetch';
/**
 * Interface
 */

export default [
  thunk,
  logger,
];