import useData from "./useData";

const useTrending = ({ entity = "all" }) =>
  useData(
    `/trending/${entity}/day`,
    {
      params: {
        language: "en-US",
      },
    },
    []
  );

export default useTrending;
