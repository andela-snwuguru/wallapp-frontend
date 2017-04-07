/**
 * Created by sundayguru on 01/04/2017.
 */

import {post, eventAction, error, success} from '../Utils';

export const LOGIN_USER = "LOGIN_USER";
export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const LOGOUT_USER = "LOGOUT_USER";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const RECEIVE_USER_DATA = "RECEIVE_USER_DATA";
export const SIGNUP_USER = "SIGNUP_USER";
export const SIGNUP_USER_SUCCESS = "SIGNUP_USER_SUCCESS";
export const SIGNUP_USER_FAIL = "SIGNUP_USER_FAIL";

export function requestUserLogin(userData) {
    return dispatch => {
      dispatch(eventAction(LOGIN_USER));
      return post("login/", userData).then(payload => {
            if(payload.token){
                dispatch(loginUser(payload));
            }else{
                error("Incorrect user credentials");
                dispatch(eventAction(LOGIN_FAILED));
            }
      });
    };
}

export function requestUserRegister(userData) {
    return dispatch => {
      dispatch(eventAction(SIGNUP_USER));
      return post("register/", userData).then(payload => {
          if(payload.id){
              dispatch(eventAction(SIGNUP_USER_SUCCESS));
              return dispatch(requestUserLogin(userData));
          }
          return dispatch(eventAction(SIGNUP_USER_FAIL));
      });
    };
}

export function logoutUser() {
    return dispatch => {
        localStorage.removeItem('tw_token');
        localStorage.removeItem('tw_user');
        dispatch(eventAction(LOGOUT_USER));
    };
}

export function loginUser(payload) {
    return dispatch => {
        if (typeof localStorage !== "undefined") {
            localStorage.setItem("tw_token", payload.token);
            localStorage.setItem("tw_user", JSON.stringify(payload.user));
        }
        success("Welcome to the Wall " + payload.user.username);
        dispatch(eventAction(RECEIVE_USER_DATA, payload.user));
    };
}