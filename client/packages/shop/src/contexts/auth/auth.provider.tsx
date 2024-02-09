import React, { useReducer } from 'react';
import { AuthContext } from './auth.context';
const isBrowser = typeof window !== 'undefined';
// **************** Roles CONSTANT Start **************************
export const ADMIN = 'ADMIN';
export const MANAGER = 'MANAGER';
export const MEMBER = 'MEMBER';
export const DELIVERY_BOY = 'DELIVERY_BOY';
export const STAFF = 'STAFF';
export const CLIENT = 'CLIENT';
// **************** Roles CONSTANT End **************************

const INITIAL_STATE = {
  isAuthenticated: isBrowser && !!localStorage.getItem('access_token'),
  currentForm: 'signIn',
  currentUser: false,
  user: {},
  isStaff: false,
  isManager: false

};

function reducer(state: any, action: any) {

  switch (action.type) {
    case 'SIGNIN':
      return {
        ...state,
        currentForm: 'signIn',
      };
    case 'SIGNIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          isStaff: [MEMBER, ADMIN, MANAGER, DELIVERY_BOY, STAFF].includes(action.user.role),
          isManager: [ADMIN, MANAGER].includes(action.user.role),
          user: action.user,
        };
      case 'CURRENT_USER':
        return{
          ...state,
          currentUser: true
        }
      case 'SIGN_OUT':
        return {
          ...state,
          isAuthenticated: false,
          user: {}
        };
      case 'SIGNUP':
        return {
          ...state,
          currentForm: 'signUp',
          
        };
      case 'OTP_VERIFICATION':
        return {
          ...state,
          currentForm: 'otpVerification',

        };
        case 'PHONE_VERIFICATION':
        return {
          ...state,
          currentForm: 'phoneVerification',

        };
      case 'FORGOTPASS':
        return {
          ...state,
          currentForm: 'forgotPass',
        };
      default:
        return state;
  }
}

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [authState, authDispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
