import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCredits } from 'Api';

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
        setGalleryCharacters(detailsMovie.slice(0,5));
        // const{author,content,created_at}=detailsMovie
        // setAuthor(author);
        // setContent(content);
        // setCreated_at(created_at);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRequest();
  }, []);

  return (
    <ul>
      {galleryCharacters.map(character => (
        <li key={character.cast_id}>
          <h3>Name character : {character.character} </h3>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
