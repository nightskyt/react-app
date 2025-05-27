import useData from "./useData";

interface Genre {
  id: number;
  name: string;
  slug: string;
}

const useGenres = () => {
  const { data, error, isLoading } = useData<Genre>("/genres");
  return { data, error, isLoading };
};

export default useGenres;
