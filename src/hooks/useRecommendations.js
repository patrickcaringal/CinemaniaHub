import useData from "./useData";

const useRecommendations = ({ entity = "movie", id }) => {
  const params = {
    params: {
      language: "en-US",
    },
  };

  const { data = [], ...rest } = useData(
    `/${entity}/${id}/recommendations`,
    params,
    []
  );

  return { data: data.results, ...rest };
};
export default useRecommendations;
