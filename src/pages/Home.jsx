import {fetchTrendingMovies} from "Api";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";
import MoviesList from "components/MoviesList/MoviesList";


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
    <MoviesList response={galleryPopularMovies}/>
  )
}

