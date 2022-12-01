const baseURL = import.meta.env.VITE_APP_BASE_URL;
const apiKey = import.meta.env.VITE_APP_API_KEY;

const fetchHandler = (type, page = 1, query) => {
  return fetch(
    `${baseURL}${type}${apiKey}&language=en-US&page=${page}${query}`
  ).then((response) => response.json());
};

//
const queryHandler = (query) => {
  return `&query=${query.split(" ").join("+")}`;
};

const typeHandler = (type, movie = "movie", tv = "tv") => {
  return type === "Movies" ? movie : tv;
};

export const fetchData = (type, query) => {
  if (query)
    return () =>
      fetchHandler(
        typeHandler(type, "search/movie?", "search/tv?"),
        1,
        queryHandler(query)
      );
  return () =>
    fetchHandler(typeHandler(type, "movie/top_rated?", "tv/top_rated?"));
};

export const fetchMovie = (type, id) => {
  return () =>
    fetch(`${baseURL}${typeHandler(type)}/${id}?${apiKey}`).then((response) =>
      response.json()
    );
};

export const fetchMovieTrailer = (type, id) => {
  return () =>
    fetch(
      ` ${baseURL}${typeHandler(type)}/${id}/videos?${apiKey}&language=en-US`
    ).then((response) => response.json());
};
