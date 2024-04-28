import useData from "./useData";

const useCollection = ({ id = "" }) => {
  const params = {
    params: {
      language: "en-US",
    },
  };

  const res = useData(`/collection/${id}`, params, []);

  return res;
};
export default useCollection;
