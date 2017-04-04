/**
 * Created by sundayguru on 01/04/2017.
 */
import fetch from 'isomorphic-fetch';


export const Config = {
    domain: "http://localhost:8000/",
    apiUrl: "http://localhost:8000/api/",
    cloudinaryUrl: "https://api.cloudinary.com/v1_1/dfsbzqadc/image/upload"
};

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
