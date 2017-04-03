/**
 * Created by sundayguru on 01/04/2017.
 */

import * as actions from '../actions/AuthActions';

let initialState = {
  requesting : false,
  user : {}
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case actions.SIGNUP_USER:
    case actions.LOGIN_USER:
      return Object.assign({}, state, {requesting: true});

    case actions.SIGNUP_USER_SUCCESS:
    case actions.SIGNUP_USER_FAIL:
    case actions.LOGOUT_USER:
      return Object.assign({}, state, {requesting: false, user:{}});
    
    case actions.USER_LOGGED_IN:
    case actions.RECEIVE_USER_DATA:
      return Object.assign({}, state, {requesting: false, user: action.payload});

    default:
      return state
  }
}