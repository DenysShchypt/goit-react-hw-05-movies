import { Link, useLocation } from 'react-router-dom'

const defaultImg ='https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MoviesList = ({response}) => {
  const location = useLocation();

  return (
    <ul>MoviesList
        {response.map(movie=>(

          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              
                <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : defaultImg
          }
          width={200}
          alt="poster"
        />
         <h3>{movie.title||movie.name}</h3> 

            </Link>
            <p>{movie.release_date&&`Movie release date: ${movie.release_date}`}</p>
            </li>
        ))

        }
    </ul>
  )
}

export default MoviesList
