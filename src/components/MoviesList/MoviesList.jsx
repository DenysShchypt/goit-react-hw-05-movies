import { useLocation } from 'react-router-dom';
import {
  BoxMovies,
  CreateMovie,
  DescriptionMovie,
  ImgMovie,
  ItemMovie,
  LinkMovie,
  TitleMovie,
} from './MoviesList.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MoviesList = ({ response }) => {
  const location = useLocation();

  return (
    <BoxMovies>
      {response.map(movie => (
        <ItemMovie key={movie.id}>
          <LinkMovie to={`/movies/${movie.id}`} state={{ from: location }}>
            <ImgMovie
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImg
              }
              alt="poster"
            />
            <DescriptionMovie>
              <TitleMovie>{movie.title || movie.name}</TitleMovie>
              <CreateMovie>
                {movie.release_date &&
                  `Movie release date: ${movie.release_date}`}
              </CreateMovie>
            </DescriptionMovie>
          </LinkMovie>
        </ItemMovie>
      ))}
    </BoxMovies>
  );
};

export default MoviesList;
