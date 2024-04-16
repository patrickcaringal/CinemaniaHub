import * as dayjs from "dayjs";

export const isMovie = (type) => type === "movie";

export const formatRuntime = (num) => {
  const hours = Math.floor(num / 60);
  const minutes = num % 60;

  return `${hours ? `${hours}h ` : ""}${minutes ? `${minutes}m` : ""}`;
};

export const formatDate = (date) => dayjs(date).format("MMM DD, YYYY");

export const sortByVote = (a, b) => b.vote_count - a.vote_count;

export const sortByReleaseAsc = (a, b) =>
  new Date(a.release_date) - new Date(b.release_date);

export const sortByReleaseDesc = (a, b) =>
  new Date(b.release_date) - new Date(a.release_date);

export const sortByFirstAirDateDesc = (a, b) =>
  new Date(b.first_air_date) - new Date(a.first_air_date);

export const sortByOrder = (a, b) => a.order - b.order;
