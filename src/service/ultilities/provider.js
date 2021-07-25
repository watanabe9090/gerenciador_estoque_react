import axios from 'axios';
import { handleResponse, handleError } from './response';

/**
 * Article on: https://dev.to/mmcshinsky/a-simple-approach-to-managing-api-calls-1lo6
 */

const BASE_URL = 'http://localhost:8080';

/** @param {string} resource  */
const getAll = (resource) => {
  return axios
    .get(`${BASE_URL}/${resource}`)
    .then(handleResponse)
    .catch(handleError);
}

/** @param {string} resource */
/** @param {string} id */
const getSingle = (resource, id) => {
  return axios
    .get(`${BASE_URL}/${resource}/${id}`)
    .then(handleResponse)
    .catch(handleError);
}

/** @param {string} resource */
/** @param {string} param */
/** @param {string} value */
const getByParam = (resource, param, value) => {
  return axios
    .get(`${BASE_URL}/${resource}/find?${param}=${value}`)
    .then(handleResponse)
    .catch(handleError);
}

/** @param {string} resource */
/** @param {object} object */
const post = (resource, object) => {
  return axios
    .post(`${BASE_URL}/${resource}`, object)
    .then(handleResponse)
    .catch(handleError);
}

/** @param {string} resource */
/** @param {string} model */
const put = (resource, model) => {
  return axios
    .put(`${BASE_URL}/${resource}`, model)
    .then(handleResponse)
    .catch(handleError);
}

/** @param {string} resource */
/** @param {string} model */
const patch = (resource, model) => {
  return axios
    .patch(`${BASE_URL}/${resource}`, model)
    .then(handleResponse)
    .catch(handleError);
}

/** @param {string} resource */
/** @param {string} id */
const remove = (resource, id) => {
  return axios
    .delete(`${BASE_URL}/${resource}`, id)
    .then(handleResponse)
    .catch(handleError);
}

const apiProvider = {
  getAll, 
  getSingle,
  getByParam, 
  post, 
  put, 
  patch, 
  remove,
};

export default apiProvider;