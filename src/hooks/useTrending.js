import useData from "./useData";
import { embedGenreNames } from "../helpers/genre";

const useTrending = ({ entity = "all" }) => {
  const { data = [], ...rest } = useData(
    `/trending/${entity}/day`,
    {
      params: {
        language: "en-US",
      },
    },
    []
  );

  const transformedData = embedGenreNames(undefined, data.results);

  return { data: transformedData, ...rest };
};
export default useTrending;
