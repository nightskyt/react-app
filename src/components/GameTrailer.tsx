import { Spinner, Text } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return <Spinner />;

  if (error) return null;

  const trailer = data?.results?.[0];

  if (!trailer) return <Text>No trailer found</Text>;

  return <video src={trailer.data[480]} poster={trailer.preview} controls />;
};

export default GameTrailer;
