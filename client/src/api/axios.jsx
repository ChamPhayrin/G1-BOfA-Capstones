import axios from "axios";
const BASE_URL = 'https://g1-b-of-a-capstones.vercel.app';

export default axios.create({
  baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'},
  withCredentials:  true
  })

  