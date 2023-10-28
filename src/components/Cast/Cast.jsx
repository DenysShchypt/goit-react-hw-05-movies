import { useParams } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';
import { fetchCredits } from 'Api';

const ErrorMessage = lazy(() => import('components/ErrorMessage'));
const Loader = lazy(() => import('components/Loader/Loader'));
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [galleryCharacters, setGalleryCharacters] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchRequest() {
      try {
        setIsLoading(true);
        setError(false);
        const detailsMovie = await fetchCredits(movieId);
        setGalleryCharacters(detailsMovie.slice(0, 10));
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRequest();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <ErrorMessage>
          Sorry, there is no information about these characters!
        </ErrorMessage>
      )}
      <ul>
        {galleryCharacters.map(character => (
          <li key={character.cast_id}>
            <img
              src={
                character.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${character.profile_path}`
                  : defaultImg
              }
              width={100}
              alt="poster"
            />
            <h3>Name character : {character.character} </h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
