import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Genre } from "../types/game";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

  return { data, error, isLoading };
};

export default useGenres;
