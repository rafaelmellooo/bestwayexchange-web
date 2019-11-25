import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use((config) => {
  const request = config;

  const token = localStorage.getItem('token');

  if (token) { request.headers.authorization = `Bearer ${token}`; }

  return request;
});

export default api;
