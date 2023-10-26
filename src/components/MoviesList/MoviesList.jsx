import React from 'react'
import { Link } from 'react-router-dom'

const MoviesList = ({response}) => {
  return (
    <ul>MoviesList
        {response.map(movie=>(
         
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
                {movie.title||movie.name}
            </Link>
            </li>
        ))

        }
    </ul>
  )
}

export default MoviesList
