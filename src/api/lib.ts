import axios from "axios";
import { api } from "@roland1993/api";

// Create your axios instance
const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

export const defineApi = (url: string) => api(url, instance);
