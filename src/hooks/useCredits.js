import useData from "./useData";

const useCredits = (
  { entity = "movie", id = "", queryParams = {} },
  deps = []
) => {
  const params = {
    params: {
      language: "en-US",
      ...queryParams,
    },
  };

  const res = useData(`/${entity}/${id}/credits`, params, deps);

  return res;
};
export default useCredits;
