import { movieGenre, tvGenre } from "../services/data/genres";
import { isMovie } from "./movie";

export const findGenre = (entity, id) => {
  const genreList = isMovie(entity) ? movieGenre : tvGenre;
  const genre = genreList.find((i) => i.id === id);
  return genre;
};

export const embedGenreNames = (entity = "none", data = []) => {
  const isEntityUndefined = entity === "none";

  const result = data?.map((i) => {
    const genres = i?.genre_ids?.map((genreId) => {
      const entityFinal = isEntityUndefined ? i.media_type : entity;
      const { name } = findGenre(entityFinal, genreId);
      return name;
    });

    return { ...i, genres };
  });

  return result;
};
