// Action types
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

// Action creators
export const login = (username) => ({
  type: LOGIN,
  payload: username,
});

export const logout = () => ({
  type: LOGOUT,
});