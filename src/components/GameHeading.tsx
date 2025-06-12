import { Heading } from "@chakra-ui/react";
import { useGameQuery } from "../gameQuery/useGameQuery";
import useGenres from "../hooks/useGemres";
import usePlatform from "../hooks/usePlatform";

const GameHeading = () => {
  const gameQuery = useGameQuery();
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatform();
  const platform = platforms?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );
  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as={"h1"} marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
