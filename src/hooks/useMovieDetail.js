import useData from "./useData";

const useMovieDetail = ({ id = "", queryParams = {} }, deps = []) => {
  const params = {
    params: {
      language: "en-US",
      ...queryParams,
    },
  };

  const res = useData(`/movie/${id}`, params, deps);

  return res;
};
export default useMovieDetail;
