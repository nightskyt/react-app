import { Button, GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Game } from "../hooks/useGames";
import CriticSource from "./CriticSource";

interface Props {
  game: Game;
}

const GameDetails = ({ game }: Props) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <Heading as="h1" size="xl" mb={2}>
        {game.name}
      </Heading>
      <Text fontSize={"md"}>
        {showMore
          ? game.description_raw
          : game.description_raw.slice(0, 100) + "..."}
      </Text>
      <Button
        onClick={() => setShowMore(!showMore)}
        fontSize="md"
        color="gray.500"
        mt={2}
      >
        {showMore ? "Show Less" : "Show More"}
      </Button>

      <SimpleGrid columns={2} mt={4}>
        <GridItem>
          <Heading size="md">Platforms</Heading>
          {game.parent_platforms.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </GridItem>

        <GridItem>
          <Heading as="dt" size="md">
            Genres
          </Heading>
        </GridItem>

        <GridItem>
          <Heading as="dt" size="md">
            Score
          </Heading>
          <CriticSource score={game.metacritic} />
        </GridItem>

        <GridItem>
          <Heading as="dt" size="md">
            Release Date
          </Heading>
          <Text>{game.released}</Text>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetails;
