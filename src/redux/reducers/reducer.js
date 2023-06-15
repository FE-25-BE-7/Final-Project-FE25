import { combineReducers } from 'redux';
import { LOGIN, LOGOUT } from '../actions/action';

// Define initial state
const initialState = {
  loggedIn: false,
  username: '',
};

// Define reducer functions
const loggedInReducer = (state = initialState.loggedIn, action) => {
  switch (action.type) {
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
    default:
      return state;
  }
};

const usernameReducer = (state = initialState.username, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return '';
    default:
      return state;
  }
};

// Combine the reducers
const rootReducer = combineReducers({
  loggedIn: loggedInReducer,
  username: usernameReducer,
});

export default rootReducer;