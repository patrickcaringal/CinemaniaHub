import useData from "./useData";

const usePersonDetail = ({ id = "", queryParams = {} }, deps = []) => {
  const params = {
    params: {
      language: "en-US",
      ...queryParams,
    },
  };

  const res = useData(`/person/${id}`, params, deps);

  return res;
};
export default usePersonDetail;
