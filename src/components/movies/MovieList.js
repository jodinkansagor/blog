import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';

const MovieList = ({ movieList }) => {
  const movieListElements = movieList.map((movie, i) => {
    return <li>
      <MovieItem movieName={movie.movieName} releaseYear={movie.releaseYear} starActor={movie.starActor} />
    </li>
  })

  return (
    <ul>
      {movieListElements}
    </ul>
  )
}

MovieList.propTypes = {
  movieList: PropTypes.arrayOf(PropTypes.shape({
    movieName: PropTypes.string.isRequired,
    releaseYear: PropTypes.string.isRequired,
    starActor: PropTypes.string.isRequired
  }))
}

export default MovieList;