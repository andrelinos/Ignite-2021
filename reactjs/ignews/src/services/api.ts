import axios from 'axios';

export const api = axios.create({
  // baseURL: '/api'
  baseURL: 'https://ignews-andrelinos.vercel.app/api'
})
