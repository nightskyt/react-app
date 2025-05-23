import { HStack, Image } from "@chakra-ui/react";
import logo from "../assert/vite.svg";
import ColorModeSwitch from "./ColorModeSwitch";

function NarvBar() {
  return (
    <HStack justifyContent='space-between'>
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NarvBar;
