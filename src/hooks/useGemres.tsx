import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then((response) => response.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

  return { data, error, isLoading };
};

export default useGenres;
