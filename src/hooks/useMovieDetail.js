import useData from "./useData";

const useMovieDetail = ({ id = "all" }) => {
  const res = useData(
    `/movie/${id}`,
    {
      params: {
        language: "en-US",
      },
    },
    []
  );

  return res;
};
export default useMovieDetail;
