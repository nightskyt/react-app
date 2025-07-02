import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Platform } from "../types/game";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatform = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
};

export default usePlatform;
