import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';

const initialState = fromJS({
  id: 1,
  name: 'clientCinqs',
  surname: 'Client010',
});


const userReducer = handleActions({

  //GET_ME: (state, { payload: me }) => state.mergeDeep(me),

  GET_ME_SUCCEEDED: (state, { payload }) => {
    
    return state;
  },

}, initialState);

export default userReducer;