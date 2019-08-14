import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL || 'http://127.0.0.1:3333',
});

api.postOrPut = (url, id, data, config = {}) => {
  const method = id ? 'put' : 'post';
  const apiUrl = id ? `${url}/${id}` : url;

  return api[method](apiUrl, data, config);
};

export default api;
