import { StyledTitle } from 'components/Components.styled';
import { StyledMovieList } from './MovieList.styled';
import { getMoviePoster } from 'api/getApi';
import { useParams } from 'react-router-dom';

export const MovieList = ({movieList, title, setMediaType}) => {
  console.log(`movieList:`, movieList );
  

  return (
    <StyledMovieList>
      <StyledTitle>Popular</StyledTitle>
      <button type="button" onClick={() => setMediaType("all")}>All</button>
      <button type="button" onClick={() => setMediaType("movie")}>Movies</button>
      <button type="button" onClick={() => setMediaType("tv")}>TV series</button>
      <div className="list-body">
        {movieList.results?.map((item) => {
          return createMovieElementMarkup(item)
        })}
      </div>
    </StyledMovieList>
  );
};


const createMovieElementMarkup = (movie) => {
  return <a className='movie-card' href={`/movie_app/${movie.media_type}/${movie.id}`} key={movie.id}>
    <img src={getMoviePoster(movie.poster_path)} alt={movie.title ?? movie.name+' title'} />
    <p className='movie-card-title'>{movie.title ?? movie.name}</p>
    <span className='rating'></span>
  </a>
}