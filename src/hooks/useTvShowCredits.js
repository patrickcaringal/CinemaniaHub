import useData from "./useData";

const useTvShowCredits = ({ id = "", queryParams = {} }, deps = []) => {
  const params = {
    params: {
      language: "en-US",
      ...queryParams,
    },
  };

  const res = useData(`/tv/${id}/aggregate_credits`, params, deps);

  return res;
};
export default useTvShowCredits;
