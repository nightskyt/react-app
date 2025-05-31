import { Box } from "@chakra-ui/react";
import { FaRegMeh, FaRegThumbsUp } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";

interface Props {
  rating_top: number;
}

const Emoji = ({ rating_top }: Props) => {
  if (rating_top < 3) return null;

  const emojiMap: { [key: number]: any } = {
    3: <FaRegMeh size={"20px"} color="gray" />,
    4: <FaRegThumbsUp size={"20px"} color="yellow" />,
    5: <GiBullseye size={"25px"} color="red" />,
  };
  return <Box marginTop={3}>{emojiMap[rating_top]}</Box>;
};

export default Emoji;
