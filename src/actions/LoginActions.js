/**
 * Created by sundayguru on 01/04/2017.
 */

import fetch from 'isomorphic-fetch';
import {Config} from '../Utils';

export const LOGIN_USER = "LOGIN_USER";
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
      return fetch(Config.apiUrl+"login/", {method: 'post', body: userData}).then(function(response){
               return response.json()
            }).then(payload => dispatch(receiveUserData(payload)));
      };
}