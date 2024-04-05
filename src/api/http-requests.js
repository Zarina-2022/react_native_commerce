import {AXIOS} from './axios-instance';

export async function getRequest(URL, params) {
  const response = await AXIOS.get(`${URL}`, {params: params});
  return response;
}

export async function postRequest(URL, payload) {
  const response = await AXIOS.post(`${URL}`, payload); // payload - userin girdigi veri: input ile, form ile etc
  return response;
}

export async function putRequest(URL, payload) {
  const response = await AXIOS.put(`${URL}`, payload);
  return response;
}

export async function patchRequest(URL, payload) {
  const response = await AXIOS.patch(`${URL}`, payload);
  return response;
}

export async function deleteRequest(URL, params) {
  const response = await AXIOS.delete(`${URL}`, {params: params});
  return response;
}

// get ve delete te neden  {params: params} kullandik?
/*
In Axios, when you're making an HTTP request with parameters using methods like GET or DELETE, 
the parameters need to be passed as an object with a key-value pair.

So when you write { params: params }, you're essentially creating an object where the key is params and the value is the params variable you passed to the function.

For example:

If params is { id: 1, name: 'John' }, then { params: params } is equivalent to { params: { id: 1, name: 'John' } }.
If params is { page: 2, limit: 10 }, then { params: params } is equivalent to { params: { page: 2, limit: 10 } }.
*/
