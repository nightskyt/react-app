import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useGameQueryDispatch } from "../gameQuery/useGameQuery";

const SearchInput = () => {
  const dispatch = useGameQueryDispatch();

  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          dispatch({ type: "SET_SEARCH_TEXT", searchText: ref.current.value });
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games"
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
