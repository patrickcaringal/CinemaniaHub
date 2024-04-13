export const generateImgPath = (path) => {
  return window.origin + import.meta.env.VITE_URL + path;
};

export const tmdbImgPath = (size = "original", filePath) => {
  return `https://image.tmdb.org/t/p/${size}/${filePath}`;
};
