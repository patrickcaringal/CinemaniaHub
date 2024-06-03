import useData from "./useData";

const useCollection = ({ id = "" }, deps = []) => {
  const params = {
    params: {
      language: "en-US",
    },
  };

  const res = useData(`/collection/${id}`, params, deps);

  return res;
};
export default useCollection;
