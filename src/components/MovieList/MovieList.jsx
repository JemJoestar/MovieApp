import { StyledTitle } from 'components/Components.styled';
import { StyledMovieList } from './MovieList.styled';
import { getMoviePoster } from 'api/getApi';

export const MovieList = ({movieList, title}) => {
  console.log(`movieList:`, movieList );


  return (
    <StyledMovieList>
      <StyledTitle>Popular</StyledTitle>
      <div className="listBody">
        {movieList.results?.map((item) => {
          return createMovieElementMarkup(item)
        })}
      </div>
    </StyledMovieList>
  );
};


const createMovieElementMarkup = (movie) => {
  return <a className='movie-card' href={`/movie/${movie.id}`} key={movie.id}>
    <img src={getMoviePoster(movie.poster_path)} alt={movie.title+' title'} />
    <p className='movie-card-title'>{movie.title}</p>
  </a>
}