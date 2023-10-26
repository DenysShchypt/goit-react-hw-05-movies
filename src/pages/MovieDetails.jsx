import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { fetchDetailsMovie } from 'Api';

export default function MovieDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState('');
  const [original_title, setOriginal_title] = useState('');
  const [overview, setOverview] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchRequest() {
      try {
        setIsLoading(true);
        setError(false);
        const detailsMovie = await fetchDetailsMovie(movieId);
        const{title,original_title,overview}=detailsMovie.data
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
  }, []);

  return (
    <div>
      <div>
        <h2>{title}</h2>
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
      <Outlet />
    </div>
  );
}
