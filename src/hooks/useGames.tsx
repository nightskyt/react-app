import useData from "./useData";
import { Genre } from "./useGemres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null) => {
  const { data, error, isLoading } = useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id } },
    [selectedGenre?.id]
  );
  return { data, error, isLoading };
};

export default useGames;
