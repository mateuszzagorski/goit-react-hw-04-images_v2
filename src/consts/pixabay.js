export const API_KEY = process.env.REACT_APP_API_KEY;
export const BASE_URL = "https://pixabay.com/api/";
export const getLinkByPageAndQuery = (searchQuery, pageNumber) => {
  return `${BASE_URL}?q=${searchQuery}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
};