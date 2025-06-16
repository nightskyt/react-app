import { Text } from "@chakra-ui/react";
import useGameTrailers from "../hooks/useGameTrailers";

interface Props {
  id: number;
}

const GameTrailers = ({ id }: Props) => {
  const { data } = useGameTrailers(id);
  if (!data) return null;

  const trailer = data.results[0];

  return (
    <>
      <Text>{trailer.name}</Text>
      <video className="video-player" controls>
        <source src={trailer.data[480]} type="video/mp4" />
      </video>
    </>
  );
};

export default GameTrailers;
