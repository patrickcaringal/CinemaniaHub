import useData from "./useData";

const useRecommendations = ({ entity = "movie", id }, deps = []) => {
  const params = {
    params: {
      language: "en-US",
    },
  };

  const { data = [], ...rest } = useData(
    `/${entity}/${id}/recommendations`,
    params,
    deps
  );

  return { data: data.results, ...rest };
};
export default useRecommendations;
