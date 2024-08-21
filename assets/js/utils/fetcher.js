import {getApiUrl} from "../config.js";

function fetchFromServer(method, endpoint, body = null) {
  return fetch(getApiUrl(endpoint), buildOptions(method, body))
    .then(response => response.json());
}

function buildOptions(method, body) {
    const options = {};

    options.method = method;

    if (body) {
        options.body = JSON.stringify(body);
    }

    options.headers = {
        "Content-Type": "application/json; charset=UTF-8"
    };

    return options;
}

export {fetchFromServer};