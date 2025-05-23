import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assert/vite.svg";

function NarvBar() {
  return (
    <HStack>
      <Image src={logo} boxSize='60px' />
      <Text>NavBar</Text>
    </HStack>
  );
}

export default NarvBar;
