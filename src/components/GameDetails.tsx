import { Heading } from "@chakra-ui/react";
import { Game } from "../types/game";
import ExpendableText from "./ExpendableText";
import GameAttributes from "./GameAttributes";
import GameTrailer from "./GameTrailer";
import GameScreenshots from "./GameScreenshots";

interface Props {
  game: Game;
}

const GameDetails = ({ game }: Props) => {
  return (
    <>
      <Heading as="h1" size="xl" mb={2}>
        {game.name}
      </Heading>
      <ExpendableText text={game.description_raw} />
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </>
  );
};

export default GameDetails;
