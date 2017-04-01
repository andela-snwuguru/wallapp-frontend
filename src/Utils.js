/**
 * Created by sundayguru on 01/04/2017.
 */

export const Config = {
    apiUrl: "http://localhost:8000/api/"
};

export function isLogged() {
    return false;
}

export function getHeaders() {
    return {
        "Authorization":"JWT " + localStorage.getItem("tw_token")
    };
}