import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_KEY;

export default axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});
