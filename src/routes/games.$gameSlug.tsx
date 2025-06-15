import { Spinner, Text } from "@chakra-ui/react";
import GameDetails from "../components/GameDetails";
import useGame from "../hooks/useGame";

export const Route = createFileRoute({
  component: GameDetailsComponent,
});

function GameDetailsComponent() {
  const { gameSlug } = Route.useParams();
  const { data: game, isLoading } = useGame(gameSlug);

  if (isLoading) return <Spinner />;

  if (!game) return <Text>Game not found</Text>;

  return <GameDetails game={game} />;
}
