import useData from "./useData";
import { embedGenreNames } from "../helpers/genre";

const useDiscover = ({ entity = "movie", queryParams = {} }) => {
  const params = {
    params: {
      language: "en-US",
      ...queryParams,
    },
  };

  const { data = [], ...rest } = useData(`/discover/${entity}`, params, []);

  const transformedData = embedGenreNames(entity, data.results);

  return { data: transformedData, ...rest };
};

export default useDiscover;
