import React, { useReducer } from 'react';
import { AuthContext } from './auth.context';
import { Roles } from 'utils/constant';
const isBrowser = typeof window !== 'undefined';

const INITIAL_STATE = {
  isAuthenticated: isBrowser && !!localStorage.getItem('access_token'),
  currentForm: 'signIn',
  currentUser: false,
  user: {},
  isStaff: false,
  isGrower: false,
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
          isStaff: [Roles.MEMBER, Roles.ADMIN, Roles.MANAGER, Roles.DELIVERY_BOY, Roles.STAFF].includes(action.user.role),
          isGrower: [Roles.GROWER].includes(action.user.role),
          isManager: [Roles.ADMIN, Roles.MANAGER].includes(action.user.role),
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
        case 'LOCATION_MODAL':
          return {
            ...state,
            currentForm: 'locationModal',
  
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
