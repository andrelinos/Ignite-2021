import axios from 'axios';

export const api = axios.create({
  baseURL: '/api',
  // baseURL: '/api/auth/session',
});
