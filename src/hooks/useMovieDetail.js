import useData from "./useData";

const useMovieDetail = ({ id = "all", queryParams = {} }) => {
  const params = {
    params: {
      language: "en-US",
      ...queryParams,
    },
  };

  const res = useData(`/movie/${id}`, params, []);

  return res;
};
export default useMovieDetail;
