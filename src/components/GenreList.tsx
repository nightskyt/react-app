import useGenres from "../hooks/useGemres";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </>
  );
};

export default GenreList;
