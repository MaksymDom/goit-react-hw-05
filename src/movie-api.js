import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjZjMGYyNmMwZTkxOGFlOTJjMjg3YmRmYTlhYjM2NCIsInN1YiI6IjY2MDFiZDdiMzUyMGU4MDE2NWQ3OGRjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4fbnGrU1G5GWhFou6fdG1Tzl2jbp_QgmVslmUnRU68k',
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get(
    '/trending/movie/day?language=en-US',
    options
  );

  return response.data.results;
};

export const getMovieDetailsById = async id => {
  const response = await axios.get(`/movie/${id}?language=en-US`, options);
  console.log(response.data);
  return response.data;
};

export const getCast = async id => {
  const response = await axios.get(
    `/movie/${id}/credits?language=en-US`,
    options
  );
  console.log(response.data);
  return response.data;
};

export const getReviews = async id => {
  const response = await axios.get(
    `/movie/${id}/reviews?language=en-US`,
    options
  );

  return response.data.results;
};

export const getMoviesByQuery = async searchQuery => {
  const response = await axios.get(
    `/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
    options
  );
  console.log(response.data.results);
  return response.data.results;
};
