import history from 'utils/history';
import configs from 'configs';
import {
  callApi,
  AUTH_TOKEN,
  USER_TOKEN,
  setTokens,
  removeTokens,
  requestOptionsHeader,
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
  const authToken = payload[AUTH_TOKEN];
  const userToken = payload[USER_TOKEN];
  const decodedResponse = decodeUserProfile(userToken);
  setTokens(authToken, userToken);
  history.push('/');
  return {
    type: LOGIN_SUCCESS,
    user: decodedResponse.user,
    role: decodedResponse.user.scope[0],
  };
}

function loginFailure(error) {
  removeTokens();
  return {
    type: LOGIN_FAILURE,
    error,
  };
}

export function login(payload) {
  return callApi(
    `${configs.default.api.ditto_backend.baseUrl}/account/login`,
    requestOptionsHeader('post', payload),
    loginRequest(payload.email),
    loginSuccess,
    loginFailure,
  );
}

function logoutRequest() {
  removeTokens();
  return {
    type: LOGOUT_REQUEST,
  };
}

function logoutSuccess() {
  removeTokens();
  return {
    type: LOGOUT_SUCCESS,
  };
}

function logoutFailure() {
  removeTokens();
  return {
    type: LOGOUT_FAILURE,
  };
}

export function logout() {
  logoutRequest();
  logoutSuccess();
  logoutFailure();
}
