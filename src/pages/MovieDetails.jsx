import React, { Suspense, lazy } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDetailsMovie } from 'Api';

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
  const backLinkHref = location.state?.from ?? '/';

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
      <Link to={backLinkHref}>Turn back</Link>
      {isLoading && <Loader />}
      <div>
        <h2>{title}</h2>
      <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          width={250}
          alt="poster"
        />
        <p>{original_title}</p>
        <p>{overview}</p>
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
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
