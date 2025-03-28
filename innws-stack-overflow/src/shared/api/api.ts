import axios from "axios";

export const api = axios.create({
  baseURL: '/',
  withCredentials: true,
});

axios.defaults.headers.post["Content-Type"] = "application/json";