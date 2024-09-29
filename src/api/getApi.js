import axios from "axios";

const API_KEY = '49dc0fc8e483e00bf3a468afadd01091';
const URL = `https://api.themoviedb.org/3`;



export const getPopularAll = async ({time="week", mediaType = "all", page = 1}) => {
  return (await axios.get(
    `${URL}/trending/${mediaType}/${time}?api_key=${API_KEY}&page=${page}`
  )).data;
};

export const getMovieDetails = async ({movieId, mediaType}) => {
  return (await axios.get(`${URL}/${mediaType}/${movieId}?api_key=${API_KEY}`)).data
}

export const getMoviePoster = (path) => {
  return "https://image.tmdb.org/t/p/w500"+path
}