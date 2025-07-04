import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "./useGames";

const apiClient = new APIClient<Game>("/games");

const useGame = (gameId: string) => {
  return useQuery({
    queryKey: ["games", gameId],
    queryFn: () => apiClient.get(gameId),
  });
};

export default useGame;
