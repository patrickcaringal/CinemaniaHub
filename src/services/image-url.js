export const generateImgPath = (path) => {
  return window.origin + import.meta.env.VITE_URL + path;
};

export const tmdbImgPath = (size = "original", filePath) => {
  return `https://image.tmdb.org/t/p/${size}/${filePath}`;
};

export const personImageFallback =
  "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg";
