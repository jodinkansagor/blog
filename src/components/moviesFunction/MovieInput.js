import React from 'react';
import PropTypes from 'prop-types';

const MovieInput = ({ onSubmit, movieName, setMovieName, releaseDate, setReleaseDate, starActor, setStarActor }) => {

  return (
    <form onSubmit={onSubmit}>
      <label>What is your favorite movie? <input type="text" value={movieName} name="movieName" onChange={({ target }) => setMovieName(target.value)} /></label>
      <label>When did it come out? <input type="text" value={releaseDate} name="releaseDate" onChange={({ target }) => setReleaseDate(target.value)} /></label>
      <label>Who is in it? <input type="text" value={starActor} name="starActor" onChange={({ target }) => setStarActor(target.value)} /></label>
      <button>Submit!</button>
    </form>
  )
}

MovieInput.propTypes = {
  movieName: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  starActor: PropTypes.string.isRequired,
  setMovieName: PropTypes.func.isRequired, 
  setReleaseDate: PropTypes.func.isRequired,
  setStarActor: PropTypes.func.isRequired
}

export default MovieInput;