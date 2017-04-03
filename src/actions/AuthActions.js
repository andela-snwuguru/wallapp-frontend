/**
 * Created by sundayguru on 01/04/2017.
 */

import {Config, post, eventAction} from '../Utils';

export const LOGIN_USER = "LOGIN_USER";
export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_USER_DATA = "RECEIVE_USER_DATA";
export const SIGNUP_USER = "SIGNUP_USER";
export const SIGNUP_USER_SUCCESS = "SIGNUP_USER_SUCCESS";
export const SIGNUP_USER_FAIL = "SIGNUP_USER_FAIL";

export function requestUserLogin(userData) {
    return dispatch => {
      dispatch(eventAction(LOGIN_USER));
      return post("login/", userData).then(payload => {
            if (typeof localStorage !== "undefined") {
                localStorage.setItem("tw_token", payload.token);
                localStorage.setItem("tw_user", JSON.stringify(payload.user));
            }
          dispatch(eventAction(RECEIVE_USER_DATA, payload.user));
      });
    };
}

export function requestUserRegister(userData) {
    return dispatch => {
      dispatch(eventAction(SIGNUP_USER));
      return post("register/", userData).then(payload => {
          if(payload.id){
              dispatch(eventAction(SIGNUP_USER_SUCCESS));
              dispatch(requestUserLogin(userData));
          }
          dispatch(eventAction(SIGNUP_USER_FAIL));
      });
    };
}