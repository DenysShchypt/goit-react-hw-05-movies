import {fetchTrendingMovies} from "Api";
import toast, { Toaster } from 'react-hot-toast';
import { lazy, useEffect, useState } from "react";

const ErrorMessage = lazy(() => import('components/ErrorMessage'));
const MoviesList = lazy(()=>import("components/MoviesList/MoviesList"));
const Loader = lazy(() => import('components/Loader/Loader'));

export default function Home(){
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const[galleryPopularMovies,setGalleryPopularMovies]=useState([]);

  useEffect(() => {

    async function fetchRequest() {
      try {
        setIsLoading(true);
        setError(false);
        const popularMovies = await fetchTrendingMovies ();
        
        if (popularMovies.length < 1) {
          toast('Nothing was found for this request', {
            duration: 6000,
          });
        } else {
          toast.success('Successful request');
        }

        setGalleryPopularMovies(popularMovies)
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRequest();
  }, []);

  return (
    <>
    {isLoading && <Loader />}
    <MoviesList response={galleryPopularMovies}/>
    {error && (
        <ErrorMessage>
          Whoops, something went wrong! Please reload this page!!!
        </ErrorMessage>
      )}
    <Toaster position="top-right" />
    </>
  )
}

