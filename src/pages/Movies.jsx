import { fetchSearchMovies } from 'Api';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [gallerySearchMovies, setGallerySearchMovies] = useState([]);
const[searchParams,setSearchParams]=useSearchParams();
const query = searchParams.get('query')



  useEffect(() => {
    if (query === null??query === '')
    {return} 
    async function fetchRequest() {
      console.log(query);
      try {
      
        setIsLoading(true);
        setError(false);
        const responseMovies = await fetchSearchMovies(query);

        if (responseMovies.length < 1) {
          toast('Nothing was found for this request', {
            duration: 6000,
          });
        } else {
          toast.success('Successful request');
        }
        setGallerySearchMovies(responseMovies)
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRequest();
  }, [query]);



const handleSubmit= e => {
  e.preventDefault();
  const form = e.currentTarget;
  setSearchParams({ query: form.elements.query.value });
  form.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" name='query'  />
      <button type='submit'>Search</button>
      </form>
      <MoviesList response={gallerySearchMovies}/>
    </div>
  );
}
