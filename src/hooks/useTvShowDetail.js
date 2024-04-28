import useData from "./useData";

const useTvShowDetail = ({ id = "", queryParams = {} }, deps = []) => {
  const params = {
    params: {
      language: "en-US",
      ...queryParams,
    },
  };

  const res = useData(`/tv/${id}`, params, deps);

  return res;
};
export default useTvShowDetail;
