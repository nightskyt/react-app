import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
  FaApple,
  FaAppStoreIos,
} from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    mac: FaApple,
    android: FaAndroid,
    nintendo: SiNintendoswitch,
    ios: FaAppStoreIos,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => {
        return (
          <Icon
            as={iconMap[platform.slug]}
            color={"gray.500"}
            key={platform.id}
          />
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
