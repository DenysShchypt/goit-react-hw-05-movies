import React, { Suspense, lazy, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDetailsMovie } from 'Api';
import { LinkBack, LinkCast, LinkReviews, MovieDescriptions, MovieInfo, MovieOriginalTitle, MoviePage, MoviePoster, MovieText, MovieTitle } from './MovieDetails.styled';

const ErrorMessage = lazy(() => import('components/ErrorMessage'));
const Loader = lazy(() => import('components/Loader/Loader'));
const defaultImg ='https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export default function MovieDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState('');
  const [original_title, setOriginal_title] = useState('');
  const [overview, setOverview] = useState('');
  const [poster_path, setPoster_path] = useState('');
  const location = useLocation();
  const backLinkHref=useRef(location.state?.from ?? '/movies');


  const { movieId } = useParams();

  useEffect(() => {
    async function fetchRequest() {
      try {
        setIsLoading(true);
        setError(false);
        const detailsMovie = await fetchDetailsMovie(movieId);
        const { title, original_title, overview, poster_path } =
          detailsMovie.data;
        setPoster_path(poster_path);
        setTitle(title);
        setOriginal_title(original_title);
        setOverview(overview);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRequest();
  }, [movieId]);

  return (
    <div>
      <LinkBack to={backLinkHref.current}>Turn back</LinkBack>
      {isLoading && <Loader />}
      <MovieInfo>
       
      <MoviePoster
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt="poster"
        />
        <MovieDescriptions>
         <MovieTitle>{title}</MovieTitle>
        <MovieOriginalTitle>{original_title}</MovieOriginalTitle>
        <MovieText>{overview}</MovieText>
        </MovieDescriptions>
      </MovieInfo>
      <MoviePage>
        <li>
          <LinkCast to="cast">Cast</LinkCast>
        </li>
        <li>
          <LinkReviews to="reviews">Reviews</LinkReviews>
        </li>
      </MoviePage>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {error && (
        <ErrorMessage>
          Sorry, there is no information about this movie!
        </ErrorMessage>
      )}
    </div>
  );
}
