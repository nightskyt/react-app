import axios from "axios";

const apiKey = import.meta.env.VITE_APP_API_KEY;

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
})

export default apiClient;
