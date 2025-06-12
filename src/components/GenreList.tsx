import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { useGameQuery, useGameQueryDispatch } from "../gameQuery/useGameQuery";
import useGenres from "../hooks/useGemres";
import { getCroppedImageURL } from "../services/image-url";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const gameQuery = useGameQuery();
  const dispatch = useGameQueryDispatch();
  const selectedGenre = data?.results.find(
    (genre) => genre.id === gameQuery.genreId
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedImageURL(genre.image_background)}
              />
              <Button
                onClick={() =>
                  dispatch({ type: "SET_GENRE_ID", genreId: genre.id })
                }
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                fontSize={"lg"}
                variant={"link"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
