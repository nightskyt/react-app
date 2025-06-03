import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGemres";
import { getCroppedImageURL } from "../services/image-url";

interface Props {
  selectedGenreId?: number;
  onSelectedGenreId: (genreId: number) => void;
}

const GenreList = ({ selectedGenreId, onSelectedGenreId }: Props) => {
  const { data, isLoading } = useGenres();

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
                onClick={() => onSelectedGenreId(genre.id)}
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
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
