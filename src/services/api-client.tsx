import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const apiKey = import.meta.env.VITE_APP_API_KEY;

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});

export default apiClient;
