import axios from 'axios';

export const get = (URL) => new Promise((resolve, reject) => {
  axios
    .get(URL)
    .then((response) => resolve(response.data))
    .catch((e) => reject(e));
});
