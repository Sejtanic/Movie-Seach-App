const baseURL = import.meta.env.VITE_APP_BASE_URL;
const apiKey = import.meta.env.VITE_APP_API_KEY;

const fetchHandler = (type, page = 1, query) => {
  return fetch(
    `${baseURL}${type}${apiKey}&language=en-US&page=${page}${query}`
  ).then((response) => response.json());
};

const queryHandler = (query) => {
  return `&query=${query.split(" ").join("+")}`;
};
export const fetchData = (type, query) => {
  if (query)
    // return () =>
    //   fetch(
    //     `https://api.themoviedb.org/3/search/movie?api_key=3cf570ef9cdb104736c91347aaf5e8d2&language=en-US&page=2&include_adult=false&query=${query}`
    //   ).then((response) => response.json());

    return () =>
      fetchHandler(
        type === "Movies" ? "search/movie?" : "search/tv?",
        2,
        queryHandler(query)
      );
  if (type === "Movies" && !query)
    return () => fetchHandler("movie/top_rated?", 1);
  if (type === "Tv Shows" && !query)
    return () => fetchHandler("tv/top_rated?", 1);
};

export const fetchMovie = (type, id) => {
  return () =>
    fetch(`${baseURL}tv/${id}?${apiKey}`).then((response) => response.json());
};

export const fetchMovieTrailer = (type, id) => {
  return () =>
    fetch(
      ` https://api.themoviedb.org/3/movie/${id}/videos?api_key=3cf570ef9cdb104736c91347aaf5e8d2&language=en-US`
    ).then((response) => response.json());
};
