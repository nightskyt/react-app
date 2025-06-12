import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import { useGameQuery, useGameQueryDispatch } from "../gameQuery/useGameQuery";
import usePlatform from "../hooks/usePlatform";

const PlatformSelector = () => {
  const { data, error } = usePlatform();
  const gameQuery = useGameQuery();
  const dispatch = useGameQueryDispatch();

  const platform = data?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() =>
              dispatch({ type: "SET_PLATFORM_ID", platformId: platform.id })
            }
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
