import 'isomorphic-fetch';
import jwt_decode from 'jwt-decode';

export function checkStatus(response) {
  if (!response.ok) {
    // (response.status < 200 || response.status > 300)
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
  return response;
}

export function parseJSON(response) {
  return response.json();
}
export const requestOptionsHeader = (method, body = null) => {
  const token = loadAuthToken();
  return {
    method: method.toUpperCase(),
    headers: { 'authorization': token, 'Content-Type': 'application/json' },
    ...(body ? { body: JSON.stringify(body) } : {}),
  };
};

/**
 * A utility to call a restful service.
 *
 * @param url The restful service end point.
 * @param config The config object of the call. Can be null.
 * @param request The request action.
 * @param onRequestSuccess The callback function to create request success action.
 *                 The function expects response json payload as its argument.
 * @param onRequestFailure The callback function to create request failure action.
 *                 The function expects error as its argument.
 */
export function callApi(
  url,
  config,
  request,
  onRequestSuccess,
  onRequestFailure,
) {
  return (dispatch) => {
    dispatch(request);

    return fetch(url, config)
      .then(checkStatus)
      .then(parseJSON)
      .then((json) => {
        dispatch(onRequestSuccess(json));
      })
      .catch((error) => {
        const { response } = error;
        if (response === undefined) {
          dispatch(onRequestFailure(error));
        } else {
          error.status = response.status;
          error.statusText = response.statusText;
          response.text().then((text) => {
            try {
              const json = JSON.parse(text);
              error.message = json.message;
            } catch (ex) {
              error.message = text;
            }
            dispatch(onRequestFailure(error));
          });
        }
      });
  };
}

export const USER_TOKEN = 'user_token';
export const AUTH_TOKEN = 'auth_token';

export function setTokens(authToken, userToken) {
  localStorage.removeItem(AUTH_TOKEN);
  localStorage.removeItem(USER_TOKEN);
  localStorage.setItem(AUTH_TOKEN, authToken);
  localStorage.setItem(USER_TOKEN, userToken);
}

export const setItemInLocalStorage = (keyName, object) => {
  localStorage.removeItem(keyName);
  localStorage.setItem(keyName, JSON.stringify(object));
};

export const getItemInLocalStorage = keyName => {
  return JSON.parse(localStorage.getItem(keyName));
};

export const deleteItemInLocalStorage = keyName => {
  localStorage.removeItem(keyName);
};

export function removeTokens() {
  localStorage.removeItem(AUTH_TOKEN);
  localStorage.removeItem(USER_TOKEN);
}

export function loadAuthToken() {
  return localStorage.getItem(AUTH_TOKEN);
}

export function decodeUserProfile(authToken) {
  try {
    return jwt_decode(authToken);
  } catch (err) {
    return null;
  }
}

export function loadUserProfile() {
  try {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    const userToken = localStorage.getItem(USER_TOKEN);
    const token = jwt_decode(authToken);
    const userProfile = jwt_decode(userToken);
    const now = new Date().getTime() / 1000; // Date().getTime() returns milliseconds.
    // So divide by 1000 to get seconds
    if (now > token.exp) {
      // user profile has expired.
      removeTokens();
      return null;
    }
    return userProfile;
  } catch (err) {
    return null;
  }
}
