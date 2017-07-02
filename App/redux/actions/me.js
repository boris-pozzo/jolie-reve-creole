import { createAction } from 'redux-actions';

//export const getMe = createAction('GET_ME');

const apiGetMe = createAction('API:GET_ME');
export const getMe = () => (dispatch, getState) => {
  dispatch(apiGetMe({
    endpoint: '/me',
  }));
};