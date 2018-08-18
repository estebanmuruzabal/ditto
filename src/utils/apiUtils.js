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

export const ID_TOKEN = 'id_token';
export const USER_INFO = 'user_info';

export function setIdToken(idToken) {
  localStorage.removeItem(ID_TOKEN);
  localStorage.setItem(ID_TOKEN, idToken);
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

export function removeIdToken() {
  localStorage.removeItem(ID_TOKEN);
}

export function loadIdToken() {
  return localStorage.getItem(ID_TOKEN);
}

export function decodeUserProfile(idToken) {
  try {
    return jwt_decode(idToken);
  } catch (err) {
    return null;
  }
}
// GuJxOyUxLaUdKS17coYwdwEvAl5L0Du2zeA8NOTLNQ4
export function loadUserProfile() {
  try {
    const idToken = localStorage.getItem(ID_TOKEN);
    const userProfile = jwt_decode(idToken);
    const now = new Date().getTime() / 1000; // Date().getTime() returns milliseconds.
    // So divide by 1000 to get seconds
    if (now > userProfile.exp) {
      // user profile has expired.
      removeIdToken();
      return null;
    }
    return userProfile;
  } catch (err) {
    return null;
  }
}
