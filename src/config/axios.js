import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "https://dummyjson.com";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
export { baseURL };
