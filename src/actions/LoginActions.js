/**
 * Created by sundayguru on 01/04/2017.
 */

import {Config, post} from '../Utils';

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_USER_DATA = "RECEIVE_USER_DATA";


export function loginUser() {
    return {
      type: LOGIN_USER
    }
}

export function receiveUserData(payload) {
    return {
      type: RECEIVE_USER_DATA,
      payload
    }
}

export function requestUserLogin(userData) {
    return dispatch => {
      dispatch(loginUser());
      return post("login/", userData).then(payload => {
          localStorage.setItem("tw_token", payload.token);
          localStorage.setItem("tw_user", JSON.stringify(payload));
          dispatch(receiveUserData(payload));
      });
    };
}