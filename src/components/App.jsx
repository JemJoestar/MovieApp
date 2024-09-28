import { getPopularMovies } from 'api/getApi';
import { Header } from './Header/Header';
import { MovieList } from './MovieList/MovieList';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MovieDetails } from './MovieDetails/MovieDetails';

export const App = () => {
  const [movieList, setMovieList] = useState('');

  useEffect(() => {
    async function datesInit() {
      const data = await getPopularMovies();
      setMovieList(data);
    }

    datesInit();
  }, []);
  console.log(`movieList:`, movieList);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={ <MovieList movieList={movieList} />}/>
        <Route path="movie/:movieId" element={<MovieDetails/>} />  
      </Routes>
    </div>
  );
};
