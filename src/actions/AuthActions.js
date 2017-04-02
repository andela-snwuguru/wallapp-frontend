/**
 * Created by sundayguru on 01/04/2017.
 */

import {Config, post, eventAction} from '../Utils';

export const LOGIN_USER = "LOGIN_USER";
export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_USER_DATA = "RECEIVE_USER_DATA";

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