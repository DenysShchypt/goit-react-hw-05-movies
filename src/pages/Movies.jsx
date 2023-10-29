import { fetchSearchMovies } from 'Api';
import toast, { Toaster } from 'react-hot-toast';
import { lazy, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const ErrorMessage = lazy(() => import('components/ErrorMessage'));
const Loader = lazy(() => import('components/Loader/Loader'));
const MoviesList = lazy(() => import('components/MoviesList/MoviesList'));
const FormSearch = lazy(() => import('components/FormSearch/FormSearch'));

export default function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [page, setPage] = useState(1);
  const [gallerySearchMovies, setGallerySearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function fetchRequest() {
      try {
        setIsLoading(true);
        setError(false);
        const responseMovies = await fetchSearchMovies(query.toLowerCase());
        if (responseMovies.length < 1) {
          toast('Nothing was found for this request', {
            duration: 6000,
          });
        } else {
          toast.success('Successful request');
        }
        setGallerySearchMovies(responseMovies);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRequest();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.elements.query.value === '') {
      toast('Please enter a valid query', {
        duration: 6000,
      });
      return setSearchParams({});
    }
    setSearchParams({ query: form.elements.query.value });
    // setGallerySearchMovies([])
    // setPage(1)
    form.reset();
  };

  // const handleClick = () => {
  //   setPage(prev=>prev+1)
  // };

  return (
    <>
      <FormSearch handleSubmit={handleSubmit} />
      <MoviesList response={gallerySearchMovies} />
      {/* <button type='button' onClick={handleClick}>Look for more</button> */}
      {isLoading && <Loader />}
      {error && (
        <ErrorMessage>
          Sorry, there is no information about this movies!
        </ErrorMessage>
      )}
      <Toaster position="top-right" />
    </>
  );
}
