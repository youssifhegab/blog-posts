import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com";

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json",
  },
});
