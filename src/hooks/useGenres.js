import { movieGenre, tvGenre } from "../services/data/genres";

const useGenres = ({ entity = "movie" }) => ({
  data: entity === "movie" ? movieGenre : tvGenre,
  isLoading: false,
  error: null,
});

export default useGenres;
