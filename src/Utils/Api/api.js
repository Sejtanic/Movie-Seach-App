const fetchHandler = (type, page) => {
  return fetch(
    `${import.meta.env.VITE_APP_BASE_URL}${type}/top_rated?${
      import.meta.env.VITE_APP_API_KEY
    }&language=en-US&page=${page}`
  ).then((response) => response.json());
};
export const fetchData = (type, query) => {
  if (type === "Movies") return () => fetchHandler("movie", 1);
  if (type === "Tv Shows") return () => fetchHandler("tv", 1);
};
