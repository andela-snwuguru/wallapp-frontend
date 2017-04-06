/**
 * Created by sundayguru on 01/04/2017.
 */
import fetch from 'isomorphic-fetch';
import {notify} from 'react-notify-toast';

 const baseUrl = "https://wallapi.herokuapp.com/";
//const baseUrl = "http://localhost:8000/";
export const Config = {
    domain: baseUrl,
    apiUrl: baseUrl+"api/"
};

export function info(message) {
    let myColor = { background: '#03a9f4', text: "#FFFFFF" };
    notify.show(message, "custom", 5000, myColor)
}

export function success(message) {
    let myColor = { background: '#009635', text: "#FFFFFF" };
    notify.show(message, "custom", 5000, myColor)
}

export function error(message) {
    let myColor = { background: '#f44336', text: "#FFFFFF" };
    notify.show(message, "custom", 5000, myColor)
}

export function isLogged() {
    return localStorage.getItem('tw_token');
}

export function getHeaders(withToken) {
    let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    if(withToken){
        if(typeof localStorage !== "undefined"){
            return Object.assign({}, headers, {
                "Authorization":"JWT " + localStorage.getItem("tw_token")
            });
        }
    }
    return headers;
}

export function post(path, data, withToken) {
     return fetch(Config.apiUrl + path, {method: 'post', headers: getHeaders(withToken), body:JSON.stringify(data)})
         .then(function(response){
            return response.json();
         });
}

export function get(path) {
     return fetch(Config.apiUrl + path)
         .then(function(response){
            return response.json();
         });
}

export function eventAction(event_type, payload) {
    return {
      type: event_type,
        payload
    }
}
