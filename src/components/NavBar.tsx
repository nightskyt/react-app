import { HStack, Image } from "@chakra-ui/react";
import logo from "../assert/vite.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (value: string) => void;
}

function NarvBar({ onSearch }: Props) {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NarvBar;
