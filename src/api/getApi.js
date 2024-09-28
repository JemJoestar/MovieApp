import axios from "axios";

const API_KEY = '49dc0fc8e483e00bf3a468afadd01091';
const ACCOUNT_ID = "20284849"
const URL = `https://api.themoviedb.org/3`;



export const getPopularMovies = async (time="week") => {
  return (await axios.get(
    `${URL}/trending/movie/${time}?api_key=${API_KEY}`
  )).data;
};


export const getMoviePoster = (path) => {
  return "https://image.tmdb.org/t/p/w500"+path
}