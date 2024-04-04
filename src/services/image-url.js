export const generateImgPath = (path) => {
  return window.origin + import.meta.env.VITE_URL + path;
};
