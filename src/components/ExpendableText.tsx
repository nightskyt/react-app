import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string;
}

const ExpendableText = ({ text }: Props) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <Text fontSize={"md"}>
        {showMore ? text : text.slice(0, 100) + "..."}
      </Text>
      <Button
        onClick={() => setShowMore(!showMore)}
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
