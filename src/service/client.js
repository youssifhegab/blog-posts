import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json",
  },
});

export default axiosClient;
