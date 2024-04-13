import * as dayjs from "dayjs";

export const isMovie = (type) => type === "movie";

export const formatRuntime = (num) => {
  const hours = Math.floor(num / 60);
  const minutes = num % 60;

  return `${hours ? `${hours}h ` : ""}${minutes ? `${minutes}m` : ""}`;
};

export const formatDate = (date) => dayjs(date).format("MMM DD, YYYY");
