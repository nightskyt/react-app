import useGenres from "../hooks/useGemres";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </>
  );
};

export default GenreList;
