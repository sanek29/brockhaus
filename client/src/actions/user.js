import { createHashHistory } from 'history';
import { notification } from 'antd';

import * as api from '~/clients/api';
import { setAuthToken, getAuthToken, removeAuthToken } from "~/clients/storage";

import { LOGIN_USER, REGISTER_USER, LOGGED_IN, LOGOUT_USER } from './types'

const browserHistory = createHashHistory();

function loggedIn(user) {
  return { type: LOGGED_IN, payload: user };
}

export function registration(dataToSubmit){
  const request = api.registration(dataToSubmit);

  return {
    type: REGISTER_USER,
    payload: request
  }
}

export function login(dataToSubmit) {
  return async dispatch => {
    let response;

    try {
      response = await api.login(dataToSubmit.email, dataToSubmit.password);
    } catch {
      return;
    }

    const jwt = response.get('token');
    const user = response.get('user');

    notification.success({ message: 'Successfully logged in' })
    setAuthToken(jwt);

    browserHistory.push('/');
    dispatch(loggedIn(user));
  };
}

export function logout() {
  return dispatch => {
    removeAuthToken();

    dispatch({ type: LOGOUT_USER });
    browserHistory.push('/');
  };
}

export function loginCheck() {
  return async (dispatch) => {
    try {
      const token = getAuthToken();

      if (token) {
        const response = await api.currentUser();
        dispatch(loggedIn(response.get('user')));
      } else {
        browserHistory.push('/login');
      }
    } catch (e) {
      browserHistory.push('/login');
    }
  };
}
