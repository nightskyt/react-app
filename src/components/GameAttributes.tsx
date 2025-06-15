import { GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Game } from "../hooks/useGames";
import CriticSource from "./CriticSource";

interface Props {
  game: Game;
}

const AttributeItem = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => {
  return (
    <GridItem>
      <Heading size="md">{label}</Heading>
      {children}
    </GridItem>
  );
};

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} mt={4}>
      <AttributeItem label="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </AttributeItem>

      <AttributeItem label="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </AttributeItem>

      <AttributeItem label="Score">
        <CriticSource score={game.metacritic} />
      </AttributeItem>

      <AttributeItem label="Release Date">
        <Text>{game.released}</Text>
      </AttributeItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
