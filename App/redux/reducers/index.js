import { combineReducers } from 'redux';


// IMPORT REDUCERS TO BE COMBINED
import user from './me';

// COMBINE THE REDUCERS
export default combineReducers({
  user,
});