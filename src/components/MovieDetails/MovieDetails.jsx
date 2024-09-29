import { getMovieDetails, getMoviePoster } from 'api/getApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledMovieDetails } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId, mediaType } = useParams();
  const [movieDetails, setMovieDetails] = useState();

  useEffect(() => {
    async function datesInit() {
      const data = await getMovieDetails({ movieId, mediaType });
      setMovieDetails(data);
    }
    datesInit();
  }, [movieId, mediaType]);

  console.log(movieDetails);

  return (
    <StyledMovieDetails background-image={getMoviePoster(movieDetails?.backdrop_path)}>
      <div className="details-body">
        <img
          className="poster"
          src={getMoviePoster(movieDetails?.poster_path)}
          alt=""
        />
        <div className="right-side">
          <p className="title">{movieDetails?.title ?? movieDetails?.name}</p>

        </div>
      </div>
      <img
        className="backdrop"
        src={getMoviePoster(movieDetails?.backdrop_path)}
        alt="backdrop_photo"
      />
    </StyledMovieDetails>
  );
};
