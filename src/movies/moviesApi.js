import { MovieDBApiKey } from "../contextConstants";

export const getNowPlayingMovies = async () => {
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${MovieDBApiKey}`
  );
  let movies = await response.json();
  return movies.results;
};

export const getNewestMovies = async () => {
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${MovieDBApiKey}&language=en-US`
  );
  let movies = await response.json();
  return movies.results;
};

export const getSearchMovies = async (search) => {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${MovieDBApiKey}&language=en-US`
    );
    let movies = await response.json();
    return movies.results;
  };

export const getTrendingMovies = async () => {
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${MovieDBApiKey}`
  );
  let movies = await response.json();
  return movies.results;
};

export const getGenres = async () => {
  let response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${MovieDBApiKey}`
  );
  let genres = await response.json();
  return genres;
};
