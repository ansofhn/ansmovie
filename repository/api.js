import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_APIKEY;

export const getPopularMovieList = async () => {
  const movie = await axios.get(
    `${baseUrl}/movie/popular?page=1&api_key=${apiKey}`
  );
  return movie.data.results;
};

export const getTopRatedMovieList = async (page) => {
  const movie = await axios.get(
    `${baseUrl}/movie/top_rated?page=${page}&api_key=${apiKey}`
  );
  return movie.data.results;
};

export const getLatestMovieList = async (page) => {
  const movie = await axios.get(
    `${baseUrl}/movie/now_playing?page=${page}&api_key=${apiKey}`
  );
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?page=1&query=${q}&api_key=${apiKey}`
  );
  return search.data.results;
};
