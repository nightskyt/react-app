import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";
import { Game } from "../hooks/useGames";
import CriticSource from "./CriticSource";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={game.background_image} alt={game.name} />
        <CardBody>
          <HStack justifyContent={"space-between"} marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticSource score={game.metacritic} />
          </HStack>
          <Heading fontSize={"2xl"}>
            <Link to={"/games/" + game.slug}>{game.name}</Link>
          </Heading>
          <Emoji rating_top={game.rating_top} />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
