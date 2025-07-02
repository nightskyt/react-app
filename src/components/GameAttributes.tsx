import { GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import CriticSource from "./CriticSource";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
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
  );
};

export default GameAttributes;
