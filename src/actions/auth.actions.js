import history from 'utils/history';
import configs from 'configs';
import {
  callApi,
  ID_TOKEN,
  setIdToken,
  removeIdToken,
  decodeUserProfile,
} from '../utils/apiUtils';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

function loginRequest(user) {
  return {
    type: LOGIN_REQUEST,
    user,
  };
}

function loginSuccess(payload) {
  const idToken = payload[ID_TOKEN];
  const decodedResponse = decodeUserProfile(idToken);
  setIdToken(idToken);
  history.push('/');
  return {
    type: LOGIN_SUCCESS,
    user: decodedResponse.user,
    role: decodedResponse.user.scope[0],
  };
}

function loginFailure(error) {
  removeIdToken();
  return {
    type: LOGIN_FAILURE,
    error,
  };
}

export function login(email, password) {
  console.log('acaaa:::', configs.default.api.ditto_backend.baseUrl);
  const config = {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  };

  return callApi(
    `${configs.default.api.ditto_backend.baseUrl}/account/login`,
    config,
    loginRequest(email),
    loginSuccess,
    loginFailure,
  );
}

function logoutSuccess() {
  removeIdToken();
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function logout(user) {
  logoutSuccess();
}
