import axios from 'axios';

export const api = axios.create({
  // baseURL: '/api/auth/session'
  baseURL: '/api'
})
