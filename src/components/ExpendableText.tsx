import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string;
}

const ExpendableText = ({ text }: Props) => {
  const [showMore, setShowMore] = useState(false);
  const limit = 100;

  const expendedText = showMore
    ? text
    : text.slice(0, limit) + (text.length > limit ? "..." : "");

  return (
    <>
      <Text fontSize={"md"}>{expendedText}</Text>
      <Button
        onClick={() => setShowMore(!showMore)}
        size={"sm"}
        fontSize="md"
        color="gray.500"
        mt={2}
      >
        {showMore ? "Show Less" : "Show More"}
      </Button>
    </>
  );
};

export default ExpendableText;
