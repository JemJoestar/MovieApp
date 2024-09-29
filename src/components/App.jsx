import { getPopularAll } from 'api/getApi';
import { Header } from './Header/Header';
import { MovieList } from './MovieList/MovieList';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { StyledApp } from './App.styled';

export const App = () => {
  const [movieList, setMovieList] = useState({});
  const [page, setPage] = useState(1);
  const [mediaType, setMediaType] = useState('all');

  useEffect(() => {
    setMovieList([]);
    setPage(1);
  }, [mediaType]);

  useEffect(() => {
    async function datesInit() {
      const data = await getPopularAll({ page, mediaType });
      if (page === 1) {
        setMovieList(data);
        return;
      }
      setMovieList({
        ...movieList,
        results: [...movieList.results, ...data.results],
      });
    }

    datesInit();
  }, [page, mediaType]);

  return (
    <StyledApp>
      <Header />
      <Routes>
        <Route
          path="/popular/"
          element={
            <MovieList setMediaType={setMediaType} movieList={movieList} />
          }
        />
        <Route path="/:mediaType/:movieId" element={<MovieDetails />} />
      </Routes>
      <button
        type="button"
        onClick={() => {
          setPage(page + 1);
          console.log(page);
        }}
      ></button>
    </StyledApp>
  );
};
