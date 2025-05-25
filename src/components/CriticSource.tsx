import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticSource = ({ score }: Props) => {
  const color = score >= 80 ? "green" : score >= 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize={"12px"} borderRadius={5}>
      {score}
    </Badge>
  );
};

export default CriticSource;
