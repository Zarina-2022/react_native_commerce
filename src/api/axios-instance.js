import axios from 'axios';
import {BASE_URL} from './urls';

const AXIOS = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

AXIOS.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

export {AXIOS};

/**
 * Interceptors can intercept and modify HTTP requests or responses before they are sent or received by your application.
Here's when you might use interceptors:
  1) Adding Headers: 
    - such as authentication tokens or content types, with every request. 
    - Interceptors allow you to automatically add these headers before sending requests.

  2) Error Handling: 
    - catch errors that occur during HTTP requests, such as network errors or server-side errors. 

  3) Logging: 
    - You can log details like the request URL, method, status code, and response data.

  4) Transforming Requests or Responses: 
    - You may need to modify the data sent in requests or the data received in responses. 
    - Interceptors allow you to intercept requests or responses and apply transformations, such as converting data formats or filtering data.

  5) Authentication: 
    - such as automatically refreshing access tokens when they expire or redirecting users to a login page when authentication is required.
 */
