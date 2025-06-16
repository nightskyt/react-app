import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Trailer } from "./useGames";

const useGameTrailers = (id: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${id}/movies`);

  return useQuery({
    queryKey: ["games", id, "movies"],
    queryFn: apiClient.getAll,
  });
};

export default useGameTrailers;
