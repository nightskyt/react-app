import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const apiKey = import.meta.env.VITE_APP_API_KEY;

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((response) => response.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + `/${id}`)
      .then((response) => response.data);
  };
}

export default APIClient;
