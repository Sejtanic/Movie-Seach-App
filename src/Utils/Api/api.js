const fetchHandler = (type, page) => {
  return fetch(
    `${import.meta.env.VITE_APP_BASE_URL}${type}/top_rated?${
      import.meta.env.VITE_APP_API_KEY
    }&language=en-US&page=${page}`
  ).then((response) => response.json());
};
export const fetchData = (type, query) => {
  if (query)
    return () =>
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=3cf570ef9cdb104736c91347aaf5e8d2&language=en-US&page=2&include_adult=false&query=${query}`
      ).then((response) => response.json());
  if (type === "Movies" && !query) return () => fetchHandler("movie", 1);
  if (type === "Tv Shows" && !query) return () => fetchHandler("tv", 1);
};
