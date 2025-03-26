import axios from "axios";

export const api = axios.create({
  baseURL: "https://codelang.vercel.app/api",
});