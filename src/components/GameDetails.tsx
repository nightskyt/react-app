import { GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { Game } from "../types/game";
import ExpendableText from "./ExpendableText";
import GameAttributes from "./GameAttributes";
import GameScreenshots from "./GameScreenshots";
import GameTrailer from "./GameTrailer";

interface Props {
  game: Game;
}

const GameDetails = ({ game }: Props) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpendableText text={game.description_raw} />
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetails;
