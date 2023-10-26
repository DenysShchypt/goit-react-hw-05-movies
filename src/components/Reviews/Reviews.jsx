import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviews } from 'Api';

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
  }, []);

  return (
    <div>
        <h3>Author: {author}</h3>
        <p>Content: {content}</p>
        <p>Created data: {created_at}</p>
    </div>
  );
}

export default Reviews