import { HStack, Image } from "@chakra-ui/react";
import logo from "../assert/vite.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "@tanstack/react-router";

function NarvBar() {
  return (
    <HStack justifyContent={"space-between"} paddingY={3}>
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit={"cover"}/>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NarvBar;
