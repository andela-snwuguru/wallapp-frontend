/**
 * Created by sundayguru on 01/04/2017.
 */

import {LOGIN_USER, RECEIVE_USER_DATA, LOGOUT_USER} from '../actions/LoginActions'

let initialState = {
  requesting : false,
  user : JSON.parse(localStorage.getItem("tw_user"))
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, {requesting: true});
    case LOGOUT_USER:
      return Object.assign({}, state, {requesting: false, user:{}});
    case RECEIVE_USER_DATA:
      return Object.assign({}, state, {requesting: false, user: action.payload});
    default:
      return state
  }
}