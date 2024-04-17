import useData from "./useData";
import { embedGenreNames } from "../helpers/genre";

const useDiscover = ({ entity = "movie", queryParams = {} }, deps = []) => {
  const params = {
    params: {
      language: "en-US",
      ...queryParams,
    },
  };

  const { data, ...rest } = useData(`/discover/${entity}`, params, deps);

  const transformedData = embedGenreNames(entity, data?.results);

  return { data: transformedData, ...rest };
};

export default useDiscover;
