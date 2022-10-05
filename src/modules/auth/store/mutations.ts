import AuthState from '../../../models/AuthState';
import User from '../../../models/User';

export const loginUser = (
  state: AuthState, { user, accessToken, refreshToken }:
  { user: User, accessToken: string, refreshToken: string }
) => {
  if ( accessToken ) {
    localStorage.setItem( 'access_token', accessToken );
    state.accessToken = accessToken;
  }
  if ( refreshToken ) {
    localStorage.setItem( 'refresh_token', refreshToken );
    state.refreshToken = refreshToken;
  }
  state.user    = user;
  state.status  = 'authenticated';
}

export const logout = ( state: AuthState ) => {
  state.user          = null;
  state.accessToken   = null;
  state.refreshToken  = null;
  state.status        = 'non-authenticated';
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
}