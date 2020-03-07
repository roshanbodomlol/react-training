import axios from 'axios';

import { API } from '../constants';

export const get = (URL) => new Promise((resolve, reject) => {
  axios
    .get(`${API.API_URL}${URL}`)
    .then((response) => resolve(response.data))
    .catch((e) => reject(e));
});

export const getWoo = (URL) => new Promise((resolve, reject) => {
  axios
    .get(`${API.API_WOO_URL}${URL}`)
    .then((response) => resolve(response.data))
    .catch((e) => reject(e));
});
