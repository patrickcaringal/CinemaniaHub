import { movieGenre, tvGenre } from "../services/data/genres";
import { isMovie } from "../helpers/movie";

const useGenres = ({ entity = "movie" }) => ({
  data: isMovie(entity) ? movieGenre : tvGenre,
  isLoading: false,
  error: null,
});

export default useGenres;
