import { Box, Heading } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import ExpendableText from "./ExpendableText";
import GameAttributes from "./GameAttributes";
import GameTrailers from "./GameTrailers";

interface Props {
  game: Game;
}

const GameDetails = ({ game }: Props) => {
  return (
    <Box margin={4}>
      <Heading as="h1" size="xl" mb={2}>
        {game.name}
      </Heading>
      <ExpendableText text={game.description_raw} />
      <GameAttributes game={game} />
      <GameTrailers id={game.id} />
    </Box>
  );
};

export default GameDetails;
