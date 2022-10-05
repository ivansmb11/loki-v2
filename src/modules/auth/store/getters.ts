import AuthState from '../../../models/AuthState';

export const currentState = ( state: AuthState ) => {
  return state.status;
}

export const loggedUserId = ( state: AuthState ) => {
  return state.user?.id;
}

export const loggedUserRole = ( state: AuthState ) => {
  return state.user?.role;
}