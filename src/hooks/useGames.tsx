import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  slug: string;
  name: string;
}

interface GamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  const controller = new AbortController();

  useEffect(() => {
    apiClient
      .get<GamesResponse>("/games", {
        signal: controller.signal, // AbortController signal
      })
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
  }, [controller.signal]);
  return { games, error };
};

export default useGames;
