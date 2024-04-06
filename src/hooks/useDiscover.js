import useData from "./useData";
import { embedGenreNames } from "../helpers/genre";

const useDiscover = ({ entity = "movie", queryParams = {} }) => {
  const { data, ...rest } = useData(
    `/discover/${entity}`,
    {
      params: {
        language: "en-US",
        ...queryParams,
      },
    },
    []
  );

  const transformedData = embedGenreNames(entity, data);

  return { data: transformedData, ...rest };
};

export default useDiscover;
