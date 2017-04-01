/**
 * Created by sundayguru on 01/04/2017.
 */

import {LOGIN_USER, RECEIVE_USER_DATA} from '../actions/LoginActions'

let initialState = {
  requesting : false,
  user : {}
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, {requesting: true});
    case RECEIVE_USER_DATA:
      return Object.assign({}, state, {requesting: false, user: action.payload});
    default:
      return state
  }
}