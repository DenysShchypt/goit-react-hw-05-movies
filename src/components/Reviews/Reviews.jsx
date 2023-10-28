import { useParams } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';
import { fetchReviews } from 'Api';

const ErrorMessage = lazy(() => import('components/ErrorMessage'));
const Loader = lazy(() => import('components/Loader/Loader'));

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [created_at, setCreated_at] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchRequest() {
      try {
        setIsLoading(true);
        setError(false);
        const detailsMovie = await fetchReviews(movieId);
        const{author,content,created_at}=detailsMovie
        setAuthor(author);
        setContent(content);
        setCreated_at(created_at);
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
          Sorry, there is no information!
        </ErrorMessage>
      )}
    <div>
        <h3>{author&&`Author: ${author}`}</h3>
        <p>{content&&`Content: ${content}`}</p>
        <p>{created_at&&`Created data: ${created_at}`}</p>
    </div>
    </>
  );
}

export default Reviews